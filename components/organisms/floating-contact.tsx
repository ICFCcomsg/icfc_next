"use client";
import { Icon } from "@/components/atoms/icon";

import {
  AnimatePresence,
  animate,
  motion,
  useReducedMotion,
} from "motion/react";
import { useEffect, useState } from "react";
import { Modal } from "@/components/atoms/modal";
import { SiteImage } from "@/components/atoms/site-image";

export function FloatingContact() {
  const reduced = useReducedMotion();
  const [wechat, setWechat] = useState(false);
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 150);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div className="fixed right-4.5 bottom-22 z-50 grid gap-3.5 max-[480px]:right-3 max-[480px]:bottom-19.5 [&_a]:grid [&_a]:size-14 [&_a]:place-items-center [&_a]:rounded-full [&_a]:bg-[#25D366] [&_a]:text-2xl [&_a]:text-white [&_a]:shadow-lg [&_button]:grid [&_button]:size-14 [&_button]:place-items-center [&_button]:rounded-full [&_button]:bg-[#07C160] [&_button]:text-2xl [&_button]:text-white [&_button]:shadow-lg">
        <button
          type="button"
          aria-label="Show WeChat contact"
          onClick={() => setWechat(true)}
        >
          <Icon name="wechat" />
        </button>
        <a
          href="https://wa.me/6586017001"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <Icon name="whatsapp" />
        </a>
      </div>
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: reduced ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduced ? 0 : 20 }}
            transition={{ duration: reduced ? 0 : 0.4, ease: "linear" }}
            type="button"
            className="fixed right-4.5 bottom-5 z-50 grid size-10 place-items-center rounded-md bg-[#AB052D] text-xl text-white shadow-lg max-[480px]:right-3"
            aria-label="Back to top"
            onClick={() => {
              if (reduced) {
                window.scrollTo({ top: 0, behavior: "instant" });
                return;
              }
              animate(window.scrollY, 0, {
                duration: 0.5,
                ease: "easeInOut",
                onUpdate: (value) =>
                  window.scrollTo({ top: value, behavior: "instant" }),
              });
            }}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
      {wechat && (
        <Modal
          closeLabel="Close WeChat contact"
          className="relative m-auto max-w-[calc(100%-2rem)] rounded-xl border-0 bg-white p-10 text-center text-[#2B3944] backdrop:bg-black/50 [&_h2]:text-2xl [&_h2]:font-bold [&_img]:mx-auto [&_img]:my-5 [&_img]:w-70 [&_img]:max-w-full [&_img]:h-auto"
          label="WeChat contact"
          onClose={() => setWechat(false)}
        >
          <h2>Connect on WeChat</h2>
          <SiteImage
            src="/assets/images/wechat.jpeg"
            alt="Scan this QR code to connect with ICFC on WeChat"
            width={280}
            height={280}
          />
          <p>wxid_u43uaoapqr5g22</p>
        </Modal>
      )}
    </>
  );
}
