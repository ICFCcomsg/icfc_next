"use client";

import { motion, useAnimationControls, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Modal({
  label,
  className,
  onClose,
  children,
  drawer = false,
  closeLabel = `Close ${label}`,
}: {
  label: string;
  className: string;
  onClose: () => void;
  children: ReactNode;
  drawer?: boolean;
  closeLabel?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const controls = useAnimationControls();
  const reduced = useReducedMotion();
  const [closing, setClosing] = useState(false);
  useEffect(() => {
    const element = dialog.current;
    element?.showModal();
    void controls.start("open");
    return () => {
      controls.stop();
      element?.close();
    };
  }, [controls]);
  async function close() {
    if (closing) return;
    setClosing(true);
    await controls.start("closed");
    onClose();
  }
  return (
    <motion.dialog
      initial="closed"
      animate={controls}
      variants={
        drawer
          ? {
              closed: { x: reduced ? 0 : "100%", opacity: reduced ? 0 : 1 },
              open: { x: 0, opacity: 1 },
            }
          : {
              closed: { opacity: 0, y: reduced ? 0 : 20 },
              open: { opacity: 1, y: 0 },
            }
      }
      transition={{
        duration: reduced ? 0 : drawer ? 0.5 : 0.2,
        ease: "easeInOut",
      }}
      ref={dialog}
      aria-label={label}
      className={className}
      onCancel={(event) => {
        event.preventDefault();
        void close();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) void close();
      }}
    >
      <motion.button
        type="button"
        autoFocus
        aria-label={closeLabel}
        className="absolute top-3 right-4 text-3xl hover:text-[#AB052D]"
        whileHover={reduced ? undefined : { rotateY: 180 }}
        transition={{ duration: 0.3 }}
        onClick={() => void close()}
      >
        ×
      </motion.button>
      <div>{children}</div>
    </motion.dialog>
  );
}
