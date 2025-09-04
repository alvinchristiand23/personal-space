import React from "react";

import { IconMinusVertical } from "@tabler/icons-react";

import CompanyLink from "@/components/ui/CompanyLink";
import { endorsements } from "@/data/endorsements";
import { EndorsementItem } from "@/types/EndorsementItem";

import SubSectionTitle from "../../ui/SubSectionTitle";

export default function Endorsement() {
  return (
    <div className="flex flex-col gap-y-4">
      <SubSectionTitle title="Endorsements" subtitle="Colleagues and Mentors" />
      <ul className="flex flex-col gap-y-4">
        {endorsements.map((item: EndorsementItem) => (
          <li key={item.name} className="flex flex-col gap-y-2">
            <div className="flex flex-wrap items-center">
              <h4 className="heading-item">{item.name}</h4>
              <IconMinusVertical className="text-border" />
              <p className="supporting-text">{item.position}</p>
            </div>
            <CompanyLink href={item.companyLink} logo={item.companyLogo} name={item.companyName} />
            <p>
              <q>{item.message}</q>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
