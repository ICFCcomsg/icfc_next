// Heading + text cards with a 01, 02... index; `dark` for use on #2B3944 sections.
export function NumberedCards({ items, dark }: { items: { heading: string; text: string }[]; dark?: boolean }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
      {items.map((x, i) => (
        <div
          key={x.heading}
          className={`rounded-2xl p-8 border-t-4 border-[#AB052D] ${dark ? "bg-[#2F3E4B]" : "bg-white shadow-[0_10px_30px_rgba(43,57,68,0.06)] border-x border-b border-x-[#DBDEE1] border-b-[#DBDEE1]"}`}
        >
          <span className={`mb-4 block text-[14px] font-bold ${dark ? "text-white/40" : "text-[#AB052D]"}`}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className={`mt-0 mb-3 font-semibold text-[20px] leading-[1.4] ${dark ? "text-white" : "text-[#2B3944]"}`}>{x.heading}</h3>
          <p className={`m-0 text-[16px] leading-7 ${dark ? "text-white/70" : "text-[#616C74]"}`}>{x.text}</p>
        </div>
      ))}
    </div>
  );
}
