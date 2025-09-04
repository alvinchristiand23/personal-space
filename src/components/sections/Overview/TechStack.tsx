"use client";

import React from "react";

import { motion } from "framer-motion";

import { hoverTransition, opacityAnimation } from "@/animations/variants";
import { techStack } from "@/data/techStack";
import { TechStackItem } from "@/types/techStackItem";

import SubSectionTitle from "../../ui/SubSectionTitle";

export default function TechStack() {
  return (
    <div className="flex flex-col gap-y-4">
      <SubSectionTitle title="Tech Stack" subtitle="Technologies and Tools" />
      <ul className="flex flex-wrap gap-8 py-2">
        {techStack.map(({ logo: Logo, ...item }: TechStackItem) => (
          <motion.li
            key={item.name}
            tabIndex={-1}
            initial="initial"
            whileHover="hover"
            whileTap="hover"
            variants={{
              initial: {
                boxShadow: `0 0 4px var(--color-border) inset, 0 0 8px var(--color-border) inset`,
              },
              hover: {
                boxShadow: `0 0 0px ${item.color} inset, 0 0 4px ${item.color} inset`,
              },
            }}
            transition={hoverTransition}
            className={
              "relative flex min-h-12 min-w-12 cursor-default items-center justify-center rounded-2xl select-none"
            }
          >
            <motion.div
              variants={{
                initial: { x: 0, y: 0, rotate: 0 },
                hover: { x: 24, y: -24, rotate: 24 },
              }}
              transition={hoverTransition}
              style={{ color: item.color }}
              className="relative"
            >
              <Logo />
            </motion.div>
            <motion.small
              variants={opacityAnimation}
              transition={hoverTransition}
              style={{ color: item.color }}
              className="absolute left-1/2 w-max -translate-x-1/2"
            >
              {item.level}
            </motion.small>
            <motion.small
              variants={opacityAnimation}
              transition={hoverTransition}
              style={{ color: item.color }}
              className="absolute top-full left-1/2 w-max -translate-x-1/2"
            >
              {item.name}
            </motion.small>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
