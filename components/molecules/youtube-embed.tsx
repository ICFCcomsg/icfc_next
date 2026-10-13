"use client";

import { useState } from "react";
import { hasConsent, readConsent, saveConsent } from "@/lib/consent";

/** Loads nothing from YouTube until the visitor allows Targeting cookies and clicks play. */
export function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  const [play, setPlay] = useState(false);
  if (play)
    return (
      <iframe
        className="icfc-yt"
        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        title={title}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    );
  return (
    <div className="icfc-yt is-placeholder">
      <p>{title}</p>
      <p className="icfc-small">This video is hosted on YouTube, which sets targeting cookies.</p>
      <button
        type="button"
        className="icfc-btn"
        onClick={() => {
          if (!hasConsent("targeting")) saveConsent({ ...readConsent()?.c, targeting: true });
          setPlay(true);
        }}
      >
        Allow and play video
      </button>
    </div>
  );
}
