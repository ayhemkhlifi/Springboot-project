"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import CustomImage from "../customImages/CustomImage";
import { SideMenuItemProps } from "@src/types/sideMenu";

interface SidebarProps {
  listItems: SideMenuItemProps[];
}

const Sidebar: React.FC<SidebarProps> = ({ listItems }) => {
  const pathname = usePathname();

  const optimizedListItems = useMemo(() => listItems, [listItems]);

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-screen bg-[#1A233B] border-r border-gray-700/50 w-64 p-6 backdrop-blur-lg"
    >
      {/* Logo Section */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-4 mb-12 group"
        role="banner"
      >
        <div className="size-14 rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
          <CustomImage
            src="/imgs/enicarthage_logo.webp"
            alt="ENICarthage Logo"
            width={56}
            height={56}
            priority
            className="object-cover p-1.5"
          />
        </div>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 font-bold text-xl">
          ENICarthage
        </h1>
      </motion.div>

      {/* Menu Section */}
      <nav className="flex-1" aria-label="Main navigation">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6 pl-3">
          Menu Principal
        </h2>
        <ul className="space-y-2">
          {optimizedListItems.map((item, index) => {
            const active = isActive(item.href);
            return (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: Math.min(index * 0.1, 0.5) }}
              >
                <Link
                  href={item.href}
                  className={clsx(
                    "flex items-center gap-4 p-3 rounded-xl transition-all",
                    "hover:bg-white/5 hover:pl-4 focus:outline-none focus:ring-2 focus:ring-blue-400",
                    active
                      ? "bg-blue-500/10 text-blue-300 border-l-4 border-blue-400"
                      : "text-gray-300"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm font-medium">{item.title}</span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <footer className="pt-6 border-t border-gray-800/50 mt-auto">
        <p className="text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} ENICarthage
        </p>
      </footer>
    </motion.aside>
  );
};

export default React.memo(Sidebar);