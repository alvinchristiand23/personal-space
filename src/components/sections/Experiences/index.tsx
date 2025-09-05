import React from "react";

import SectionTitle from "../../ui/SectionTitle";
import Timeline from "./Timeline";

export default function Experience() {
  return (
    <section id="Experiences">
      <SectionTitle title="Experience" sectionNumber="2" />
      <div className="section-content">
        <Timeline />
      </div>
    </section>
  );
}
