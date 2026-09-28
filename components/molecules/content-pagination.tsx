"use client";

import {
  createContext,
  useContext,
  useState,
  type ComponentProps,
} from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

const PageContext = createContext<{
  page: number;
  setPage: (page: number) => void;
}>({ page: 1, setPage: () => {} });

export function PaginationGroup({
  children,
  ...props
}: ComponentProps<"section">) {
  const [page, setPage] = useState(1);
  return (
    <PageContext.Provider value={{ page, setPage }}>
      <section {...props}>{children}</section>
    </PageContext.Provider>
  );
}

export function PaginationPage({
  page,
  children,
  ...props
}: HTMLMotionProps<"div"> & { page: number }) {
  const current = useContext(PageContext).page;
  const reduced = useReducedMotion();
  const visible = current === page;
  return (
    <motion.div
      {...props}
      hidden={!visible}
      initial={{ opacity: 0, y: reduced ? 0 : 10 }}
      animate={{ opacity: visible ? 1 : 0, y: visible || reduced ? 0 : 10 }}
      transition={{ duration: reduced ? 0 : 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export function PaginationButton({
  page,
  direction,
  className = "",
  ...props
}: ComponentProps<"button"> & { page?: number; direction?: -1 | 1 }) {
  const state = useContext(PageContext);
  const target = page ?? state.page + (direction ?? 0);
  const disabled = target < 1 || target > 2;
  const selected = page === state.page;
  return (
    <button
      {...props}
      type="button"
      disabled={disabled}
      aria-current={selected ? "page" : undefined}
      onClick={() => state.setPage(target)}
      className={`${className} transition-all duration-300 disabled:pointer-events-none disabled:opacity-40 ${selected ? "border-[#AB052D]! bg-[#AB052D]! text-white!" : ""}`}
    />
  );
}
