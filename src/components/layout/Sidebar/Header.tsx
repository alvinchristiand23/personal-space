import React from "react";

import Image from "next/image";

import { IconFileCvFilled } from "@tabler/icons-react";

import ButtonLink from "@/components/ui/ButtonLink";
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
        className="border-accent w-[clamp(4rem,2.8571vw+3.4286rem,6rem)] rounded-3xl border-2 p-1"
      />
      <div className="flex min-w-0 flex-col">
        <h2 className="heading-item truncate">{NAME}</h2>
        <p className="supporting-text truncate">{USERNAME}</p>
      </div>
      <ButtonLink label="CV of Alvin Christian D" icon={<IconFileCvFilled />} href="/docs/cv.pdf" />
    </header>
  );
}
