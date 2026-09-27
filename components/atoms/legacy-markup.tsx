export function LegacyMarkup({ html }: { html: string }) {
  return (
    <div
      className="legacy-site"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
