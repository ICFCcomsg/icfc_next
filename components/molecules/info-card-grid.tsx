export type InfoCard = { heading: string; text: string };

/** Responsive grid of heading + text cards; `dark` for use on #2B3944 sections. */
export function InfoCardGrid({ items, dark }: { items: InfoCard[]; dark?: boolean }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
      {items.map((s) => (
        <div
          key={s.heading}
          className={`rounded-2xl p-7 ${dark ? "bg-[#2F3E4B]" : "bg-[#F8F8F9] border border-[#DBDEE1]"}`}
        >
          <h3 className={`mt-0 mb-2 font-semibold text-[20px] leading-[1.4] ${dark ? "text-white" : "text-[#2B3944]"}`}>
            {s.heading}
          </h3>
          <p className={`mt-0 mb-0 text-[17px] leading-7 ${dark ? "text-white/70" : "text-[#616C74]"}`}>{s.text}</p>
        </div>
      ))}
    </div>
  );
}
