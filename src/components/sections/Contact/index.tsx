"use client";

import React from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import { hoverTransition } from "@/animations/variants";
import SectionTitle from "@/components/ui/SectionTitle";
import { NAME, USERNAME } from "@/constants/user";
import { contacts } from "@/data/contacts";
import { cn } from "@/utils/cn";

export default function Contact() {
  return (
    <section id="Contact">
      <SectionTitle title="Contact" sectionNumber="4" />
      <div className="section-content">
        <div className="flex flex-col gap-8 lg:flex-row">
          <ul className="flex flex-1 flex-wrap gap-8">
            {contacts.map(({ icon: Icon, ...item }, index) => (
              <motion.li
                key={item.name}
                className={cn(
                  "flex grow flex-col flex-wrap gap-y-2",
                  index <= 1 ? "basis-2/5" : "basis-1/4 lg:basis-1/3",
                )}
              >
                <div className="flex items-center gap-x-2">
                  <Icon style={{ color: item.color }} />
                  <h3 className="heading-item">{item.name}</h3>
                </div>
                <p className="supporting-text">{item.username}</p>
                <motion.a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{
                    borderColor: "var(--color-border)",
                    color: "var(--color-muted)",
                    fontWeight: 500,
                  }}
                  whileHover={{
                    borderColor: item.color,
                    color: item.color,
                    fontWeight: 600,
                  }}
                  transition={hoverTransition}
                  className="supporting-text min-w-48 cursor-pointer rounded-2xl border-2 py-2 text-center whitespace-nowrap"
                >
                  {item.label}
                </motion.a>
              </motion.li>
            ))}
          </ul>
          <div className="relative h-88 w-full lg:h-auto lg:flex-1">
            <Image
              src="/images/alvinchristiand-large.webp"
              fill
              alt={`Portrait of ${NAME}`}
              priority
              style={{ objectPosition: "center 23%" }}
              className="rounded-3xl object-cover"
            />
            <div className="absolute bottom-8 left-8">
              <h3 className="heading-item text-root">{NAME}</h3>
              <p className="supporting-text text-surface">@{USERNAME}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
