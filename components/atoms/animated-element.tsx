"use client";

import {
  Children,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import {
  animate,
  motion,
  MotionConfig,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { SiteLink } from "@/components/atoms/site-link";

const elements = {
  div: motion.div,
  span: motion.span,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  p: motion.p,
  SiteLink: motion.create(SiteLink),
};

type Props = HTMLAttributes<HTMLElement> & {
  as?: keyof typeof elements;
  effect?:
    | "fade"
    | "up"
    | "down"
    | "left"
    | "right"
    | "reveal-left"
    | "reveal-right"
    | "reveal-top"
    | "reveal-bottom"
    | "split"
    | "move"
    | "rotate"
    | "marquee";
  delay?: number;
  duration?: number;
  distance?: number;
  axis?: "x" | "y";
  href?: string;
};

function textContent(children: ReactNode): string {
  return Children.toArray(children)
    .map((child) =>
      typeof child === "string" || typeof child === "number"
        ? String(child)
        : isValidElement<{ children?: ReactNode }>(child)
          ? textContent(child.props.children)
          : "",
    )
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

export function AnimatedElement({
  as = "div",
  effect = "up",
  delay = 0,
  duration = 0.8,
  distance = 30,
  axis = "y",
  children,
  ...props
}: Props) {
  const reduced = useReducedMotion();
  const Component: ElementType = elements[as];
  if (effect === "move" || effect === "rotate") {
    return (
      <ScrollDecoration
        {...props}
        as={as}
        effect={effect}
        distance={distance}
        axis={axis}
      >
        {children}
      </ScrollDecoration>
    );
  }
  if (effect === "marquee") {
    return (
      <Component
        {...props}
        initial={false}
        animate={{ x: reduced ? "0%" : ["0%", "-50%"] }}
        transition={{
          duration: 80,
          repeat: reduced ? 0 : Infinity,
          ease: "linear",
        }}
      >
        {children}
      </Component>
    );
  }
  const hidden = reduced
    ? { opacity: 1 }
    : {
        opacity: effect.startsWith("reveal") ? 1 : 0,
        x: effect === "left" ? -distance : effect === "right" ? distance : 0,
        y: effect === "up" ? distance : effect === "down" ? -distance : 0,
        clipPath:
          effect === "reveal-right"
            ? "inset(0 0 0 100%)"
            : effect === "reveal-top"
              ? "inset(0 0 100% 0)"
              : effect === "reveal-bottom"
                ? "inset(100% 0 0 0)"
                : effect === "reveal-left"
                  ? "inset(0 100% 0 0)"
                  : undefined,
      };
  let character = 0;
  return (
    <Component
      {...props}
      aria-label={
        effect === "split" ? textContent(children) : props["aria-label"]
      }
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: effect === "split" ? {} : hidden,
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          clipPath: effect.startsWith("reveal") ? "inset(0 0 0 0)" : undefined,
        },
      }}
      transition={{
        duration: reduced ? 0 : duration,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {effect === "split" && !reduced
        ? Children.map(children, (child) => {
            if (typeof child !== "string") return child;
            return child
              .replace(/\s+/g, " ")
              .split(/(\s+)/)
              .map((word, index) =>
                /^\s+$/.test(word) ? (
                  " "
                ) : (
                  <span key={index} aria-hidden="true" className="inline-block">
                    {Array.from(word).map((letter) => {
                      const order = character++;
                      return (
                        <motion.span
                          key={order}
                          className="inline-block"
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 },
                          }}
                          transition={{
                            duration: 0.8,
                            delay: delay + order * 0.02,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          {letter}
                        </motion.span>
                      );
                    })}
                  </span>
                ),
              );
          })
        : children}
    </Component>
  );
}

function ScrollDecoration({
  as = "div",
  effect,
  distance = 100,
  axis = "y",
  children,
  ...props
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const value = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduced ? 0 : distance],
  );
  const Component: ElementType = elements[as];
  return (
    <Component
      {...props}
      ref={ref}
      style={
        effect === "rotate"
          ? { rotate: value }
          : axis === "x"
            ? { x: value }
            : { y: value }
      }
    >
      {children}
    </Component>
  );
}

export function AnimatedCounter({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(value);
  const decimals = String(value).split(".")[1]?.length ?? 0;
  useEffect(() => {
    if (!inView || reduced) return;
    const control = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Number(latest.toFixed(decimals))),
    });
    return () => control.stop();
  }, [inView, reduced, value, decimals]);
  return (
    <span ref={ref} className={className} aria-label={String(value)}>
      <span aria-hidden="true">{reduced ? value : display}</span>
    </span>
  );
}

export function SiteMotion({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
