"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Icon } from "@/components/atoms/icon";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";

export type BlogPost = {
  href: string;
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
};

export function BlogCard({ post }: { post: BlogPost }) {
  const [active, setActive] = useState(false);
  const reduced = useReducedMotion();
  const ease = [0.25, 0.1, 0.25, 1] as const;
  return (
    <article
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocusCapture={() => setActive(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setActive(false);
      }}
    >
      <div className="relative overflow-hidden rounded-t-md">
        <SiteLink href={post.href} aria-label={post.title} className="block">
          <motion.div
            initial={false}
            animate={{ scale: active && !reduced ? 1.1 : 1.02 }}
            transition={{ duration: reduced ? 0 : 0.8, ease }}
          >
            <SiteImage
              src={post.image}
              alt=""
              className="block h-auto w-full"
            />
          </motion.div>
        </SiteLink>
        <motion.div
          initial={false}
          animate={{ backgroundColor: active ? "#AB052D" : "#2B3944" }}
          transition={{ duration: reduced ? 0 : 0.5, ease }}
          className="absolute bottom-0 left-0 flex flex-wrap items-center gap-3 px-4 py-3.25 text-sm font-medium text-white"
        >
          <span className="flex items-center gap-2">
            <Icon name="user" />
            <span>ICFC</span>
          </span>
          <span className="flex items-center gap-2">
            <Icon name="tag" />
            {post.category}
          </span>
          <span className="flex items-center gap-2">
            <Icon name="calendar" />
            {post.date}
          </span>
        </motion.div>
      </div>
      <div className="rounded-b-md border border-t-0 border-[#DBDEE1] bg-white pt-7.5 pr-10 pb-8.75 pl-8.75 max-[1600px]:px-7.5 max-[1600px]:pb-7.5 max-[1199px]:p-5 max-[575px]:p-6.25">
        <h2 className="relative mb-5 pb-5 text-[24px] leading-[1.4] font-semibold text-[#2B3944] max-[1600px]:text-[22px] max-[1199px]:text-[20px] max-[991px]:text-[22px] max-[575px]:text-[20px] before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-[#DBDEE1]">
          <SiteLink
            href={post.href}
            className="transition-colors hover:text-[#AB052D] focus-visible:text-[#AB052D]"
          >
            {post.title}
          </SiteLink>
          <motion.span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-px bg-black"
            initial={false}
            animate={{ width: active ? "100%" : "70px" }}
            transition={{ duration: reduced ? 0 : 0.6, ease }}
          />
        </h2>
        {post.description && (
          <p className="mb-3.75 text-[17px] leading-7 font-normal text-[#616C74]">
            {post.description}
          </p>
        )}
        <SiteLink
          href={post.href}
          className="inline-flex text-[17px] font-medium text-[#2B3944] underline transition-colors hover:text-[#AB052D]"
        >
          Read More<span className="sr-only">: {post.title}</span>
        </SiteLink>
      </div>
    </article>
  );
}
