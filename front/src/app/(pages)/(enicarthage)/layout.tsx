"use client";

import "@src/css/globals.css";
import DefaultLayout from "@src/components/layouts/DefaultLayout";
import { sideList } from "@src/data/sideItems";
import useWhoami from "@src/hooks/useWhoami";

export default function PagesDefaultLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const whoami = useWhoami();

   const menuItems = sideList[whoami] || null;
  return (
    <main>
      <DefaultLayout listItems={menuItems}>{children}</DefaultLayout>
    </main>
  );
}
