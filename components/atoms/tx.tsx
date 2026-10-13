import { getPageStrings } from "@/lib/dictionary";

/** Translates inline English text on hand-coded pages: <Tx ns="about">{"Our story"}</Tx>. */
export async function Tx({ ns, children }: { ns: string; children: string }) {
  return (await getPageStrings(ns))[children] ?? children;
}
