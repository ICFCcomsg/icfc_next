"use client";

import { useEffect, useState } from "react";

const KEY = "icfc_view";

/** Quick view / Full detail switch. Blocks marked data-detail hide in Quick view. Lasts for the session only. */
export function ViewToggle({ labels = ["Quick view", "Full detail"] }: { labels?: [string, string] }) {
  const [full, setFull] = useState(false);

  useEffect(() => {
    let stored = false;
    try {
      stored = sessionStorage.getItem(KEY) === "full";
    } catch {}
    // Read after mount so server and client render the same first frame.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFull(stored);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("icfc-quick", !full);
    try {
      sessionStorage.setItem(KEY, full ? "full" : "quick");
    } catch {}
  }, [full]);

  return (
    <div className="icfc-seg" role="group" aria-label="Detail level">
      <button type="button" aria-pressed={!full} onClick={() => setFull(false)}>
        {labels[0]}
      </button>
      <button type="button" aria-pressed={full} onClick={() => setFull(true)}>
        {labels[1]}
      </button>
    </div>
  );
}
