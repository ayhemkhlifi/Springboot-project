import React, { ReactNode } from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import { SideMenuItemProps } from '@src/types/sideMenu';
interface DefaultLayoutProps {
  children: ReactNode;
  listItems : SideMenuItemProps[];
}

import { usePathname } from "next/navigation";

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children,listItems }) => {
  const pathname = usePathname().slice(1);
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar Section */}
      <Sidebar listItems={listItems}  />

      {/* Main Content Section */}
      <div className="flex flex-col flex-1">
        <Header />
        <div className='text-gray-300 p-4'>{pathname}</div>
        <main className="px-4 size-full overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default DefaultLayout;
