import Sidebar from "@/components/layout/Sidebar/Sidebar";

import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <div className="spacer top-0"></div>
      <div className="mx-auto max-w-[90rem] px-4">
        <Sidebar />
        <main className="flex min-h-[calc(100dvh-4rem)] flex-col gap-y-12 px-4 lg:ml-50"></main>
      </div>
      <div className="spacer bottom-0"></div>
    </RootLayout>
  );
}
