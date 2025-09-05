"use client";

import { useState } from "react";

import {
  IconArrowNarrowRightDashed,
  IconMinusVertical,
  IconSquareRoundedCheck,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

import { hoverTransition, layoutTransition } from "@/animations/variants";
import CompanyLink from "@/components/ui/CompanyLink";
import { experiences } from "@/data/experiences";
import { ExperienceItem } from "@/types/ExperienceItem";
import { cn } from "@/utils/cn";
import { workDuration } from "@/utils/workDuration";

export default function Timeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <ul className="flex flex-col gap-y-8">
      {experiences.map((item: ExperienceItem, index) => (
        <li key={item.companyName} className="flex flex-col gap-y-2">
          <h3 className="heading-item">{item.position}</h3>
          <CompanyLink href={item.companyLink} logo={item.companyLogo} name={item.companyName} />
          <div className="flex flex-col gap-y-1">
            <div className="flex flex-wrap items-center">
              <p className="supporting-text">
                {item.startDate} - {item.endDate}
              </p>
              <small className="text-accent ml-2">
                {workDuration(item.startDate, item.endDate)}
              </small>
              <IconMinusVertical className="text-border" />
              <p className="supporting-text">{item.type}</p>
              <IconMinusVertical className="text-border" />
              <p className="supporting-text">{item.mode}</p>
            </div>
            <small className="text-muted">{item.skills?.join(" . ")}</small>
          </div>
          <motion.button
            onClick={() => toggle(index)}
            tabIndex={-1}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className={cn("flex w-max cursor-pointer items-center gap-x-2")}
          >
            <motion.div
              variants={{
                initial: { rotate: 0, color: "var(--color-muted)" },
                animate: {
                  rotate: openIndex === index ? 90 : 0,
                  color: openIndex === index ? "var(--color-primary)" : "var(--color-muted)",
                },
                hover: { color: "var(--color-accent)" },
              }}
              transition={hoverTransition}
            >
              <IconArrowNarrowRightDashed strokeWidth={openIndex === index ? 2 : 1.5} />
            </motion.div>
            <motion.p
              variants={{
                initial: { fontWeight: 500, color: "var(--color-muted)" },
                animate: {
                  fontWeight: openIndex === index ? 600 : 500,
                  color: openIndex === index ? "var(--color-primary)" : "var(--color-muted)",
                },
                hover: { color: "var(--color-accent)" },
              }}
              transition={hoverTransition}
              className="supporting-text"
            >
              {openIndex === index ? "Hide " : "Show "}
              {item.type === "Class" || item.type === "Bootcamp" ? "Highlights" : "Contributions"}
            </motion.p>
          </motion.button>
          <AnimatePresence mode="wait">
            {openIndex === index && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={layoutTransition}
                className="ml-1.5 flex flex-col gap-y-1"
              >
                {item.contributions.map((desc) => (
                  <li key={desc} className="flex gap-x-3">
                    <div>
                      <IconSquareRoundedCheck className="small-icon pt-2" />
                    </div>
                    <p>{desc}</p>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
}
