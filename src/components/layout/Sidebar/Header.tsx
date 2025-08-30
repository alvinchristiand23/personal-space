import React from "react";

import Image from "next/image";

import { NAME, USERNAME } from "@/constants/user";

export default function Header() {
  return (
    <header className="flex flex-row items-center gap-4 lg:flex-col">
      <Image
        src={"/images/alvinchristiand.webp"}
        width={96}
        height={96}
        alt="Portrait of Alvin Christian D"
        priority
        className="border-accent size-16 rounded-3xl border-2 p-1 md:size-20 lg:size-24"
      />
      <div className="flex flex-col">
        <h2 className="heading-item">{NAME}</h2>
        <p className="supporting-text">{USERNAME}</p>
      </div>
    </header>
  );
}
