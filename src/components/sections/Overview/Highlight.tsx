import React from "react";

import { highlights } from "@/data/highlights";
import { HighlightItem } from "@/types/highlightItem";

export default function Highlight() {
  return (
    <ul className="flex flex-col gap-4 md:flex-row md:justify-around">
      {highlights.map(({ icon: Icon, ...item }: HighlightItem) => (
        <li key={item.title} className="flex flex-col items-start gap-y-2">
          <Icon className="text-accent" strokeWidth={2.2} />
          <div className="flex flex-col">
            <h3 className="heading-item">{item.title}</h3>
            <p className="supporting-text">{item.subtitle}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
