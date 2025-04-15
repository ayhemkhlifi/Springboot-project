import React, { ReactNode } from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import { SideMenuItemProps } from '@src/types/sideMenu';
import { usePathname } from "next/navigation";

interface DefaultLayoutProps {
  children: ReactNode;
  listItems: SideMenuItemProps[];
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, listItems }) => {
  const pathname = usePathname().slice(1);
  
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar Section */}
      <Sidebar listItems={listItems} />

      {/* Main Content Section */}
      <div className="flex h-screen flex-col flex-1 overflow-hidden">
        <Header />
        
        {/* Content Container */}
        <div className="flex-1 h-full overflow-y-hidden p-6">
          {/* Path Display */}
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              {pathname.replace(/-/g, ' ')}
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl h-[95%] mx-auto  bg-white rounded-2xl shadow-sm  overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;