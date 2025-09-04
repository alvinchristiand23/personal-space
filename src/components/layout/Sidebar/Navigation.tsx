"use client";

import React from "react";

import { IconMapPinFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";

import { hoverTransition, layoutTransition, scaleXAnimation } from "@/animations/variants";
import { navigations } from "@/data/navigations";
import { useSectionScroll } from "@/hooks/useSectionScroll";

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
          className={
            "relative flex min-h-12 min-w-12 cursor-pointer items-center justify-between rounded-2xl"
          }
        >
          {activeSectionId === item && (
            <motion.span
              layoutId="activeBackgroundIndicator"
              transition={layoutTransition}
              className="bg-surface absolute -z-10 h-full w-full rounded-2xl"
            ></motion.span>
          )}
          <div className="relative flex flex-1 justify-center">
            {activeSectionId === item && (
              <motion.p
                layoutId="activeNumberIndicator"
                transition={layoutTransition}
                className="font-pally text-xs font-bold"
              >
                {index + 1}
              </motion.p>
            )}
          </div>
          <motion.h2
            initial={{
              color: "var(--color-muted)",
              fontWeight: 450,
              scale: 1,
            }}
            animate={{
              color: activeSectionId === item ? "var(--color-primary)" : "var(--color-muted)",
              fontWeight: activeSectionId === item ? 600 : 450,
              scale: activeSectionId === item ? 1.05 : 1,
            }}
            className="relative"
          >
            {item}
            {activeSectionId !== item && (
              <motion.span
                variants={scaleXAnimation}
                transition={hoverTransition}
                className="bg-accent/60 absolute bottom-0 left-0 h-1 w-full origin-left"
              />
            )}
          </motion.h2>
          <div className="relative flex flex-1 justify-center">
            {activeSectionId === item && (
              <motion.div layoutId="activeNavIndicator" transition={layoutTransition}>
                <IconMapPinFilled className="text-accent size-3" />
              </motion.div>
            )}
          </div>
        </motion.button>
      ))}
    </nav>
  );
}
