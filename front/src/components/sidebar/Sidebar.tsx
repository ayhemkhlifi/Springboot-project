"use client";

import React from "react";
import logo from "@public/imgs/enicarthage_logo.webp";
import { SideMenuItemProps } from "@src/types/sideMenu";
import CustomImage from "../customImages/CustomImage";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface SidebarProps {
  listItems: SideMenuItemProps[];
}

const Sidebar: React.FC<SidebarProps> = ({ listItems }) => {
  const pathname = usePathname();
  return (
    <aside className="bg-gray-200 w-48 sm:w-56 md:w-64 lg:w-72 border border-gray-400 p-4 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <div className="size-16 rounded-full overflow-hidden">
          <CustomImage src={logo} alt="Enicarthage" priority />
        </div>
        <h5 className="text-[#2A84FB] font-bold text-lg">Enicarthage</h5>
      </div>

      {/* Menu Section */}
      <h2 className="mt-4 text-gray-500 font-semibold">Menu Principale</h2>
      <nav>
        <ul className="mt-3 space-y-2">
          {listItems.map((item) => {
            const isActive = pathname.includes(item.href);

            return (
              <li
                key={item.href}
                className={clsx(
                  "flex items-center gap-2",
                  isActive ? "text-blue-600" : "text-gray-700",
                  "hover:text-blue-600"
                )}
              >
                <Link
                  href={item.href}
                  className={clsx(
                    "flex items-center gap-3 p-2 rounded-lg transition",
                    isActive && "bg-blue-100"
                  )}
                >
                  <item.icon className="w-5 h-5 text-blue-500" />
                  <span className="text-base">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
