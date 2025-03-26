import React from "react";
import logo from "@public/imgs/enicarthage_logo.webp";
import { SideMenuItemProps } from "@src/types/sideMenu";
import CustomImage from "../customImages/CustomImage";
import Link from "next/link";

const Sidebar: React.FC<{ listItems: SideMenuItemProps[] }> = ({ listItems }) => {
  return (
    <section className="bg-gray-200 w-44 border border-gray-400 p-2">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <div className="size-16 rounded-full overflow-hidden">
          <CustomImage src={logo} alt="enicarthage" />
        </div>
        <h5 className="text-[#2A84FB] font-bold">Enicarthage</h5>
      </div>

      {/* Menu Section */}
      <h2 className="mt-3 text-gray-500">Menu Principale</h2>
      <nav>
        <ul className="mt-2">
          {listItems.map((item, index) => (
            <li key={index} className="mt-2">
              <Link href={item.href} className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <item.icon className="w-5 h-5" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Sidebar;
