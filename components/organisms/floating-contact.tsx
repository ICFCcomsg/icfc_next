"use client";
import { Icon } from "@/components/atoms/icon";

import { useState } from "react";
import { Modal } from "@/components/atoms/modal";
import { SiteImage } from "@/components/atoms/site-image";

export function FloatingContact() {
  const [wechat, setWechat] = useState(false);
  return (
    <>
      <div className="fixed right-4 bottom-4 z-50 grid gap-3 md:right-6 md:bottom-6 [&_a]:grid [&_a]:size-14 [&_a]:place-items-center [&_a]:rounded-full [&_a]:bg-[#08C466] [&_a]:text-2xl [&_a]:text-white [&_a]:shadow-lg [&_button]:grid [&_button]:size-14 [&_button]:place-items-center [&_button]:rounded-full [&_button]:bg-[#08C466] [&_button]:text-2xl [&_button]:text-white [&_button]:shadow-lg">
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
        <button
          type="button"
          className="!size-10 justify-self-end !rounded-md !bg-[#AB052D]"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      </div>
      {wechat && (
        <Modal
          className="relative m-auto max-w-[calc(100%-2rem)] rounded-xl border-0 bg-white p-10 text-center text-[#2B3944] backdrop:bg-black/50 [&_h2]:text-2xl [&_h2]:font-bold [&_img]:mx-auto [&_img]:my-5 [&_img]:w-[280px] [&_img]:max-w-full [&_img]:h-auto"
          label="WeChat contact"
          onClose={() => setWechat(false)}
        >
          <button
            type="button"
            autoFocus
            aria-label="Close WeChat contact"
            className="absolute top-3 right-4 text-3xl hover:text-[#AB052D]"
            onClick={() => setWechat(false)}
          >
            ×
          </button>
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
