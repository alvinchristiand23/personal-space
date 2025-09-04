import React from "react";

import SectionTitle from "../../ui/SectionTitle";
import Endorsement from "./Endorsement";
import Highlight from "./Highlight";
import Introduction from "./Introduction";
import TechStack from "./TechStack";

export default function Overview() {
  return (
    <section id="Overview">
      <SectionTitle title="Overview" sectionNumber="1" />
      <div className="section-content">
        <Highlight />
        <Introduction />
        <TechStack />
        <Endorsement />
      </div>
    </section>
  );
}
