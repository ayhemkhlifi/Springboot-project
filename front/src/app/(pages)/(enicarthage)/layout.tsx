"use client"
import "@src/css/globals.css";
import DefaultLayout from "@src/components/layouts/DefaultLayout";



import { sideList } from "@src/data/sideItems";
import { whoami } from "@src/shared/variables";
export default function PagesDefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={""}
      >
      <DefaultLayout listItems={sideList[whoami]}>{children}</DefaultLayout>
      </body>
    </html>
  );
}