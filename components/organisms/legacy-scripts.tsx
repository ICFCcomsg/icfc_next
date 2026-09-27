"use client";

import { useEffect } from "react";

export function LegacyScripts() {
  useEffect(() => {
    let cancelled = false;
    const scripts = Array.from(
      document.querySelectorAll<HTMLScriptElement>(
        ".legacy-site script[data-legacy-script]",
      ),
    );

    void (async () => {
      for (const original of scripts) {
        if (cancelled) return;

        const script = document.createElement("script");
        const src = original.getAttribute("src");
        const isAsync = original.hasAttribute("async");
        if (src && !isAsync) script.async = false;

        for (const attr of Array.from(original.attributes)) {
          if (
            attr.name === "data-legacy-script" ||
            attr.name === "data-legacy-original-type" ||
            attr.name === "type"
          ) {
            continue;
          }
          script.setAttribute(attr.name, attr.value);
        }

        const type = original.dataset.legacyOriginalType;
        if (type) script.type = type;
        script.textContent = original.textContent;

        if (!src || isAsync) {
          original.replaceWith(script);
          continue;
        }

        await new Promise<void>((resolve) => {
          script.addEventListener("load", () => resolve(), { once: true });
          script.addEventListener("error", () => resolve(), { once: true });
          original.replaceWith(script);
        });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
