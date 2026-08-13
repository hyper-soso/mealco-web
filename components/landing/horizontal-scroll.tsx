"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import type { MotionStyle } from "motion/react";
import type { ReactNode } from "react";
import { useRef } from "react";

interface Props {
  children: ReactNode;
  count: number;
  label: string;
}

export function HorizontalScroll({ children, count, label }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const distance = ((count - 1) / count) * 100;
  const rawX = useTransform(scrollYProgress, [0, 1], ["0%", `-${distance}%`]);
  const x = useSpring(rawX, { stiffness: 120, damping: 30, mass: 0.2 });
  const trackStyle: MotionStyle & { "--step-count": number } = {
    "--step-count": count,
    width: `${count * 100}%`,
    x,
  };

  return (
    <div
      ref={containerRef}
      className="relative mt-8 motion-reduce:h-auto!"
      style={{ height: `${count * 100}svh` }}
    >
      <div className="sticky top-16 flex h-[calc(100svh-4rem)] flex-col justify-center overflow-hidden py-8 motion-reduce:static motion-reduce:h-auto motion-reduce:overflow-visible">
        <div
          className="mb-4 flex items-center gap-4 motion-reduce:hidden"
          aria-hidden="true"
        >
          <span className="text-sm font-semibold text-muted-foreground">
            01
          </span>
          <div className="h-1 flex-1 overflow-hidden rounded-lg bg-muted">
            <motion.div
              className="h-full origin-left rounded-lg bg-brand-400"
              style={{ scaleX: scrollYProgress }}
            />
          </div>
          <span className="text-sm font-semibold text-muted-foreground">
            0{count}
          </span>
        </div>

        <motion.ol
          aria-label={label}
          className="flex h-full max-h-[48rem] [&>li]:w-[calc(100%/var(--step-count))] [&>li]:shrink-0 motion-reduce:h-auto motion-reduce:max-h-none motion-reduce:w-full! motion-reduce:flex-col motion-reduce:gap-8 motion-reduce:[&>li]:w-full!"
          style={trackStyle}
        >
          {children}
        </motion.ol>
      </div>
    </div>
  );
}
