import React, { ReactNode } from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import { SideMenuItemProps } from '@src/types/sideMenu';
interface DefaultLayoutProps {
  children: ReactNode;
  listItems : SideMenuItemProps[];
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children,listItems }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar Section */}
      <Sidebar listItems={[]}  />

      {/* Main Content Section */}
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-4 size-full overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default DefaultLayout;
