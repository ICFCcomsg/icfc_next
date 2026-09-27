"use client";

import { useState } from "react";
import { Modal } from "@/components/atoms/modal";
import { SiteImage } from "@/components/atoms/site-image";

export function FloatingContact() {
  const [wechat, setWechat] = useState(false);
  return (
    <>
      <div className="native-floating-contact">
        <button
          type="button"
          aria-label="Show WeChat contact"
          onClick={() => setWechat(true)}
        >
          <i className="ri-wechat-fill" aria-hidden="true" />
        </button>
        <a
          href="https://wa.me/6586017001"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <i className="ri-whatsapp-fill" aria-hidden="true" />
        </a>
        <button
          type="button"
          className="native-back-top"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      </div>
      {wechat && (
        <Modal
          className="native-contact-dialog"
          label="WeChat contact"
          onClose={() => setWechat(false)}
        >
          <button
            type="button"
            autoFocus
            aria-label="Close WeChat contact"
            className="native-panel-close"
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
