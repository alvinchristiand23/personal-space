import React from "react";

import { IconCopyright } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="hidden lg:flex lg:flex-col lg:items-center lg:text-center">
      <div className="flex items-center gap-x-1">
        <small>Copyright</small>
        <IconCopyright className="text-secondary size-4" />
        <small>2025</small>
      </div>
      <small>All rights reserved</small>
    </footer>
  );
}
