import React from "react";

import { cn } from "@/utils/cn";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SubSectionTitle({ title, subtitle, className }: Props) {
  return (
    <div className={cn("flex flex-col", className)}>
      <h3 className="heading-subsection">{title}</h3>
      <p className="supporting-text">{subtitle}</p>
    </div>
  );
}
