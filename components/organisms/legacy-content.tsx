import { LegacyMarkup } from "@/components/atoms/legacy-markup";
import { LegacyScripts } from "./legacy-scripts";

export function LegacyContent({ html }: { html: string }) {
  return (
    <>
      <LegacyMarkup html={html} />
      <LegacyScripts />
    </>
  );
}
