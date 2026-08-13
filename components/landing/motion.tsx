"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const easing = [0.22, 1, 0.36, 1] as const;

interface MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: MotionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: easing }}
    >
      {children}
    </motion.div>
  );
}

export function RevealSection({ children, className, delay = 0, id }: MotionProps & { id?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={false}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: easing }}
    >
      {children}
    </motion.section>
  );
}

export function RevealListItem({ children, className, delay = 0 }: MotionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.li
      className={className}
      initial={false}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: -8 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: easing }}
    >
      {children}
    </motion.li>
  );
}

export function RevealArticle({ children, className, delay = 0 }: MotionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={className}
      initial={false}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: -8 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: easing }}
    >
      {children}
    </motion.article>
  );
}

export function Float({ children, className, delay = 0 }: MotionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={false}
      animate={
        reduceMotion
          ? { opacity: 1 }
          : { opacity: 1, scale: 1, y: [0, -16, 0], rotate: [0, 2, 0] }
      }
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.7, delay, ease: easing },
        y: { duration: 6, delay, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 6, delay, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      {children}
    </motion.div>
  );
}
