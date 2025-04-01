"use client";

import "@src/css/globals.css";
import DefaultLayout from "@src/components/layouts/DefaultLayout";
import { sideList } from "@src/data/sideItems";
import useWhoami from "@src/hooks/useWhoami";

import { usePathname } from "next/navigation";
export default function PagesDefaultLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const whoami = useWhoami();
  const pathname = usePathname();
   // Check if we are in the Encadrant page
   const isEncadrantPage = pathname.startsWith("/encadrant");

   // Choose the correct menu items based on the path
   const menuItems = isEncadrantPage ? sideList["encadrant"] : sideList[whoami] || sideList["student"];
  return (
    <main>
      <DefaultLayout listItems={menuItems}>{children}</DefaultLayout>
    </main>
  );
}
