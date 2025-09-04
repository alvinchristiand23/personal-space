import Sidebar from "@/components/layout/Sidebar";
import Overview from "@/components/sections/Overview";

import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <div className="spacer top-0"></div>
      <div className="mx-auto max-w-[90rem] px-4">
        <Sidebar />
        <main className="mb-[clamp(8rem,2.8571vw+7.4286rem,10rem)] flex min-h-screen flex-col gap-y-12 px-4 lg:mb-0 lg:ml-50 lg:min-h-[calc(100dvh-4rem)]">
          <Overview />
        </main>
      </div>
      <div className="spacer bottom-0"></div>
    </RootLayout>
  );
}
