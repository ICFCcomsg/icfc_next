"use client";
import {
  createContext,
  useContext,
  useId,
  useState,
  type ComponentProps,
  type ReactNode,
} from "react";
import { motion } from "motion/react";
import { Icon } from "@/components/atoms/icon";

const AccordionContext = createContext<{
  active: string | null;
  setActive: (id: string) => void;
  dark: boolean;
} | null>(null);
export function AccordionGroup({
  dark = false,
  children,
  ...props
}: ComponentProps<"div"> & { dark?: boolean }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <AccordionContext.Provider value={{ active, setActive, dark }}>
      <div {...props}>{children}</div>
    </AccordionContext.Provider>
  );
}
export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  className = "",
}: {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}) {
  const [localOpen, setLocalOpen] = useState(defaultOpen);
  const group = useContext(AccordionContext);
  const id = useId();
  const open = group
    ? group.active === id || (group.active === null && defaultOpen)
    : localOpen;
  const dark = group?.dark ?? false;
  function toggle() {
    if (group) group.setActive(open ? "" : id);
    else setLocalOpen(!open);
  }
  return (
    <div
      className={`${dark ? "rounded-none border-b border-white/5" : "mb-4 overflow-hidden rounded-md border border-[#DBDEE1] bg-white"} ${className} ${dark && open ? "!bg-[#2F3E4B]" : ""}`}
    >
      <h3>
        <button
          type="button"
          className={`relative flex w-full items-center justify-between gap-5 text-left font-medium transition-colors ${dark ? "px-5 py-[22px] text-xl max-[1199px]:text-lg" : "px-5 py-5 text-base"} ${open ? (dark ? "text-white" : "bg-[#AB052D]/5 text-[#AB052D]") : dark ? "text-white/50 hover:text-white" : "text-[#2B3944] hover:text-[#AB052D]"}`}
          aria-expanded={open}
          aria-controls={id}
          onClick={toggle}
        >
          {title}
          <Icon
            name={dark ? (open ? "minus" : "plus") : open ? "up" : "down"}
            className="shrink-0"
          />
        </button>
      </h3>
      <motion.div
        id={id}
        aria-hidden={!open}
        inert={!open}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div
          className={
            dark
              ? "pt-0 pr-[50px] pb-5 pl-5 text-[17px] leading-normal text-white/55"
              : "px-5 pb-5 text-base leading-7 text-[#616C74]"
          }
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
