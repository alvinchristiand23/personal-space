"use client";

import React, { ComponentProps } from "react";

import Image, { StaticImageData } from "next/image";

import { motion } from "framer-motion";

import { hoverTransition } from "@/animations/variants";
import { cn } from "@/utils/cn";

interface Props extends ComponentProps<typeof motion.a> {
  logo: StaticImageData | string;
  name: string;
  className?: string;
}

export default function CompanyLink({ logo, name, className, ...props }: Props) {
  return (
    <motion.a
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={-1}
      initial="initial"
      whileHover="hover"
      className={cn("flex w-fit cursor-pointer flex-wrap items-center gap-2", className)}
      {...props}
    >
      <Image src={logo} width={24} height={24} alt={`Logo of ${name}`} className="logo" />
      <motion.p
        variants={{
          initial: {
            color: "var(--color-secondary)",
            fontSize: "var(--text-sm)",
            fontWeight: 500,
          },
          hover: {
            color: "var(--color-primary)",
            fontSize: "var(--text-base)",
            fontWeight: 600,
          },
        }}
        transition={hoverTransition}
        className="supporting-text"
      >
        {name}
      </motion.p>
    </motion.a>
  );
}
