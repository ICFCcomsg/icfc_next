"use client";

import {
  Children,
  createContext,
  useContext,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ComponentProps,
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
  useSpring,
  useMotionValue,
} from "motion/react";
import { SiteImage } from "@/components/atoms/site-image";
import { Icon } from "@/components/atoms/icon";
import { SiteLink } from "@/components/atoms/site-link";

const elements = {
  div: motion.div,
  svg: motion.svg,
  Icon: motion.create(Icon),
  SiteImage: motion.create(SiteImage),
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

type Props = HTMLAttributes<HTMLElement> &
  Pick<
    ComponentProps<"svg">,
    "viewBox" | "fill" | "width" | "height" | "xmlns" | "stroke" | "strokeWidth"
  > & {
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
      | "marquee"
      | "none"
      | "skew"
      | "logo"
      | "pulse"
      | "hotspot"
      | "figure"
      | "magnetic";
    delay?: number;
    duration?: number;
    distance?: number;
    axis?: "x" | "y";
    href?: string;
    src?: string;
    alt?: string;
    name?: string;
    startAt?: number;
    index?: number;
    loop?: boolean;
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
  startAt = 90,
  index = 0,
  loop = false,
  children,
  ...props
}: Props) {
  const reduced = useReducedMotion();
  const hotspots = useContext(HotspotsContext);
  const Component: ElementType = elements[as];
  if (effect === "move" || effect === "rotate") {
    return (
      <ScrollDecoration
        {...props}
        as={as}
        effect={effect}
        distance={distance}
        axis={axis}
        startAt={startAt}
      >
        {children}
      </ScrollDecoration>
    );
  }
  if (effect === "magnetic")
    return (
      <MagneticElement {...props} as={as}>
        {children}
      </MagneticElement>
    );
  if (effect === "marquee") {
    return (
      <Component
        {...props}
        initial={false}
        animate={{ x: reduced ? 0 : [0, distance] }}
        transition={{
          duration,
          repeat: reduced ? 0 : Infinity,
          ease: "linear",
        }}
      >
        {children}
      </Component>
    );
  }
  if (effect === "skew" || effect === "logo") {
    return (
      <Component
        {...props}
        variants={{
          rest: { scaleX: 1, scaleY: 1, y: 0 },
          visible: { scaleX: 1, scaleY: 1, y: 0 },
          hover: reduced
            ? {}
            : effect === "skew"
              ? {
                  scaleX: [1, 0.7, 1.1, 0.95, 1],
                  scaleY: [1, 1.1, 0.7, 1.05, 1],
                }
              : { y: ["100%", "0%"] },
        }}
        transition={{ duration: reduced ? 0 : effect === "skew" ? 0.6 : 0.5 }}
      >
        {children}
      </Component>
    );
  }
  if (effect === "hotspot") {
    const active = hotspots?.active === index;
    return (
      <Component
        {...props}
        initial={false}
        animate={active ? "hover" : "rest"}
        onPointerEnter={() => hotspots?.setHovered(index)}
        onPointerLeave={() => hotspots?.setHovered(null)}
        onFocusCapture={() => hotspots?.setHovered(index)}
        onBlurCapture={() => hotspots?.setHovered(null)}
      >
        {children}
      </Component>
    );
  }
  if (effect === "figure") {
    return (
      <Component
        {...props}
        variants={{
          rest: { opacity: 0, x: "-50%", y: -70, visibility: "hidden" },
          hover: { opacity: 1, x: "-50%", y: -35, visibility: "visible" },
        }}
        transition={{ duration: reduced ? 0 : 0.5 }}
      >
        {children}
      </Component>
    );
  }
  if (effect === "pulse") {
    return (
      <Component {...props}>
        {children}
        <motion.span
          aria-hidden="true"
          className={
            loop
              ? "pointer-events-none absolute left-1/2 top-1/2 -z-10 size-22.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
              : "pointer-events-none absolute top-1.75 left-1.75 z-1 size-5 rounded-full bg-[#2B3944]"
          }
          initial={false}
          animate={
            loop && !reduced ? { scale: [1, 1.5], opacity: [1, 0] } : undefined
          }
          variants={{
            rest: { opacity: 0 },
            hover: reduced
              ? { opacity: 0 }
              : { scale: [1, 1.5], opacity: [1, 0] },
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
        />
      </Component>
    );
  }
  if (effect === "none")
    return (
      <Component {...props} initial="rest" animate="rest" whileHover="hover">
        {children}
      </Component>
    );
  const hidden = reduced
    ? { opacity: 1 }
    : {
        opacity: effect.startsWith("reveal") ? 1 : 0,
        x:
          effect === "left"
            ? "-100%"
            : effect === "right"
              ? "100%"
              : effect === "reveal-left"
                ? "-50%"
                : effect === "reveal-right"
                  ? "50%"
                  : 0,
        y:
          effect === "up"
            ? "100%"
            : effect === "down"
              ? "-100%"
              : effect === "reveal-top"
                ? "-50%"
                : effect === "reveal-bottom"
                  ? "50%"
                  : 0,
      };
  let character = 0;
  return (
    <Component
      {...props}
      aria-label={
        effect === "split" ? textContent(children) : props["aria-label"]
      }
      initial="hidden"
      whileHover="hover"
      whileInView="visible"
      viewport={{ once: effect !== "split", margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: effect === "split" ? {} : hidden,
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
        },
      }}
      transition={{
        duration: reduced ? 0 : duration,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {effect.startsWith("reveal") ? (
        <motion.div
          variants={{
            hidden: reduced
              ? {}
              : {
                  x:
                    effect === "reveal-left"
                      ? "50%"
                      : effect === "reveal-right"
                        ? "-50%"
                        : 0,
                  y:
                    effect === "reveal-top"
                      ? "50%"
                      : effect === "reveal-bottom"
                        ? "-50%"
                        : 0,
                  scale: effect === "reveal-bottom" ? 1.3 : 1,
                },
            visible: { x: 0, y: 0, scale: 1 },
          }}
          transition={{
            duration: reduced ? 0 : duration,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {children}
        </motion.div>
      ) : effect === "split" && !reduced ? (
        Children.map(children, (child) => {
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
      ) : (
        children
      )}
    </Component>
  );
}

function ScrollDecoration({
  as = "div",
  effect,
  distance = 100,
  axis = "y",
  startAt = 90,
  children,
  ...props
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start ${startAt / 100}`, "end start"],
  });
  const value = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduced ? 0 : distance],
  );
  const smooth = useSpring(value, { stiffness: 60, damping: 35 });
  const Component: ElementType = elements[as];
  return (
    <Component
      {...props}
      ref={ref}
      style={
        effect === "rotate"
          ? { rotate: reduced ? 0 : smooth }
          : axis === "x"
            ? { x: reduced ? 0 : smooth }
            : { y: reduced ? 0 : smooth }
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

const HotspotsContext = createContext<{
  active: number;
  setHovered: (index: number | null) => void;
} | null>(null);
export function RotatingHotspots({
  children,
  count = 4,
  ...props
}: ComponentProps<"div"> & { count?: number }) {
  const [active, setActive] = useState(-1);
  const [hovered, setHovered] = useState<number | null>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced || hovered !== null) return;
    const timer = window.setInterval(
      () => setActive((index) => (index < 0 ? 1 : (index + 1) % count)),
      1500,
    );
    return () => window.clearInterval(timer);
  }, [count, hovered, reduced]);
  return (
    <HotspotsContext.Provider
      value={{ active: hovered ?? (reduced ? -1 : active), setHovered }}
    >
      <div {...props}>{children}</div>
    </HotspotsContext.Provider>
  );
}
function MagneticElement({ as = "div", children, ...props }: Props) {
  const [offset, setOffset] = useState({ x: 0, y: 0, rotate: 0 });
  const reduced = useReducedMotion();
  const Component: ElementType = elements[as];
  return (
    <Component
      {...props}
      animate={reduced ? { x: 0, y: 0, rotate: 0 } : offset}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      onPointerMove={(event: React.PointerEvent<HTMLElement>) => {
        if (event.pointerType !== "mouse" || reduced) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        setOffset({ x: x * 0.3, y: y * 0.3, rotate: x * 0.05 });
      }}
      onPointerLeave={() => setOffset({ x: 0, y: 0, rotate: 0 })}
    >
      {children}
    </Component>
  );
}

export function CursorFollower() {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 1600, damping: 70 });
  const smoothY = useSpring(y, { stiffness: 1600, damping: 70 });
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (reduced) return;
    function move(event: PointerEvent) {
      if (event.pointerType !== "mouse") return;
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
      setActive(
        event.target instanceof Element &&
          !!event.target.closest(
            "a, button, input[type=submit], [role=button]",
          ),
      );
    }
    function hide() {
      setVisible(false);
    }
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", hide);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", hide);
    };
  }, [reduced, x, y]);
  if (reduced) return null;
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-999999 size-10 -translate-x-1/2 -translate-y-1/2 rounded-full border max-[991px]:hidden pointer-coarse:hidden"
      style={{ x: smoothX, y: smoothY }}
      animate={{
        opacity: visible ? (active ? 0.15 : 1) : 0,
        scale: active ? 1.7 : 1,
        borderColor: active ? "rgba(34,34,34,0.05)" : "rgba(156,156,156,0.5)",
        backgroundColor: active ? "rgba(34,34,34,0.2)" : "rgba(34,34,34,0)",
      }}
      transition={{ duration: 0.15 }}
    >
      <span className="absolute left-1/2 top-1/2 size-0.75 -translate-x-1/2 rounded-full bg-[#AB052D]" />
    </motion.div>
  );
}
export function AnimatedMenuIcon() {
  const reduced = useReducedMotion();
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-[1em]"
      fill="currentColor"
    >
      {[4, 11, 18].map((top, index) => (
        <motion.rect
          key={top}
          x="2"
          y={top}
          width={index === 1 ? 15 : 20}
          height="2"
          variants={{
            hover: reduced
              ? {}
              : {
                  clipPath: [
                    "inset(-2px 0)",
                    "inset(-2px 0 -2px 100%)",
                    "inset(-2px 100% -2px 0)",
                    "inset(-2px 0)",
                  ],
                },
          }}
          transition={{
            duration: 0.8,
            times: [0, 0.42, 0.43, 1],
            delay: index * 0.1,
            ease: [0.44, 1.1, 0.53, 0.99],
          }}
        />
      ))}
    </motion.svg>
  );
}
