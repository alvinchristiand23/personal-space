import React from "react";

import SubSectionTitle from "../../ui/SubSectionTitle";

export default function Introduction() {
  return (
    <article className="flex flex-col gap-y-4">
      <SubSectionTitle
        title="Short Introduction"
        subtitle="Indonesian, Software Engineer and Tech Enthusiast"
      />
      <p>
        Hi, I’m Alvin — a Software Engineer based in Indonesia and a tech enthusiast who’s been
        passionate about technology since childhood. I bring that passion to life through nearly two
        years of experience developing web and mobile applications using modern frameworks and
        tools.
      </p>
      <p>
        I’m committed to writing clean and efficient code with a detail-oriented mindset, and I see
        collaboration as an important value that helps deliver high-quality applications. I’m also
        continuously growing as a developer by exploring new technologies, sharpening my skills, and
        staying aligned with industry best practices.
      </p>
    </article>
  );
}
