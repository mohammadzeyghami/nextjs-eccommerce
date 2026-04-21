"use client";

import React, { Children } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FadeInRandomProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  seed?: number | string;
};

function hashSeed(seed: number | string): number {
  if (typeof seed === "number") {
    return Math.abs(seed);
  }

  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }

  return Math.abs(hash);
}

function getDeterministicOffset(seed: number | string, distance: number) {
  const variant = hashSeed(seed) % 4;

  switch (variant) {
    case 0:
      return { x: distance, y: 0 };
    case 1:
      return { x: -distance, y: 0 };
    case 2:
      return { x: 0, y: distance };
    default:
      return { x: 0, y: -distance };
  }
}

export function FadeInRandom({
  children,
  className,
  delay = 0,
  duration = 0.55,
  distance = 28,
  seed = 0,
}: FadeInRandomProps) {
  const initialOffset = getDeterministicOffset(seed, distance);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: initialOffset.x, y: initialOffset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

type AnimatedSectionsProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  duration?: number;
  distance?: number;
};

export function AnimatedSections({
  children,
  className,
  stagger = 0.08,
  duration,
  distance,
}: AnimatedSectionsProps) {
  return (
    <div className={cn(className)}>
      {Children.map(children, (child, index) => {
        if (child == null) {
          return child;
        }

        return (
          <FadeInRandom seed={index} delay={index * stagger} duration={duration} distance={distance}>
            {child}
          </FadeInRandom>
        );
      })}
    </div>
  );
}
