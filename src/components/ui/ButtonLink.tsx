"use client";

import React, { ComponentProps } from "react";

import { motion } from "framer-motion";

import { hoverTransition, whileTap } from "@/animations/variants";
import { cn } from "@/utils/cn";

interface Props extends ComponentProps<typeof motion.a> {
  label: string;
  icon: React.ReactNode;
  className?: string;
}

export default function ButtonLink({ label, icon, className, ...props }: Props) {
  return (
    <motion.a
      target="_blank"
      rel="noopener noreferrer"
      initial="initial"
      whileHover="hover"
      whileFocus="hover"
      whileTap={whileTap}
      className={cn(
        "hover:border-accent/60 border-border flex min-h-12 min-w-12 cursor-pointer items-center justify-center rounded-2xl border-2 transition-colors duration-150 ease-out",
        className,
      )}
      {...props}
    >
      <motion.div
        variants={{
          initial: { rotate: -24, color: "var(--color-muted)" },
          hover: { rotate: 0, color: "var(--color-accent)" },
        }}
        transition={hoverTransition}
      >
        {icon}
      </motion.div>
      <p className="sr-only">{label}</p>
    </motion.a>
  );
}
