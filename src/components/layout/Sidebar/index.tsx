import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

export default function Sidebar() {
  return (
    <aside className="scrollbar-none bg-root fixed bottom-0 left-0 z-40 flex h-[clamp(8rem,2.8571vw+7.4286rem,10rem)] w-full px-8 lg:left-auto lg:h-full lg:w-50 lg:flex-col lg:gap-y-12 lg:overflow-y-auto lg:px-4 lg:py-8">
      <Header />
      <Navigation />
      <Footer />
    </aside>
  );
}
