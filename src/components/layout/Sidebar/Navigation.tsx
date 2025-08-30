"use client";

import React from "react";

import { IconTallymark1 } from "@tabler/icons-react";
import { motion } from "framer-motion";

import { hoverTransition, layoutTransition, scaleXAnimation } from "@/animations/variants";
import { navigations } from "@/data/navigations";
import { useSectionScroll } from "@/hooks/useSectionScroll";
import { cn } from "@/utils/cn";

export default function Navigation() {
  const { activeSectionId, scrollToSection } = useSectionScroll();

  return (
    <nav className="hidden lg:flex lg:flex-col lg:gap-y-4">
      {navigations.map((item: string, index) => (
        <motion.button
          key={item}
          type="button"
          onClick={() => scrollToSection(item)}
          initial="initial"
          whileHover="hover"
          whileFocus="hover"
          className={cn(
            "flex min-h-12 cursor-pointer items-center justify-between rounded-2xl",
            activeSectionId === item ? "text-primary" : "text-muted",
          )}
        >
          <div className="flex flex-1 justify-center">
            {activeSectionId === item ? (
              <motion.h4
                layoutId="activeNumberIndicator"
                transition={layoutTransition}
                className="text-sm font-semibold"
              >
                {index + 1}
              </motion.h4>
            ) : null}
          </div>
          <motion.h3
            initial={{
              fontWeight: 400,
              fontSize: "var(--text-base)",
            }}
            animate={{
              fontWeight: activeSectionId === item ? 600 : 400,
              fontSize: activeSectionId === item ? "var(--text-lg)" : "var(--text-base)",
            }}
            className="relative"
          >
            {item}
            <motion.span
              variants={scaleXAnimation}
              transition={hoverTransition}
              className="bg-accent/40 absolute bottom-0 left-0 h-1 w-full origin-left rounded-full"
            />
          </motion.h3>
          <div className="flex flex-1 justify-center">
            {activeSectionId === item ? (
              <motion.div layoutId="activeNavIndicator" transition={layoutTransition}>
                <IconTallymark1 strokeWidth={2.5} className="text-accent size-6" />
              </motion.div>
            ) : null}
          </div>
        </motion.button>
      ))}
    </nav>
  );
}
