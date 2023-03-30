import React from "react";

import { DashboardHeader } from "@/components";
import Sidebar from "@/components/Sidebar";

const DashboardLayout = ({
  title,
  children,
  white,
}: {
  title?: any;
  children: any;
  white?: boolean;
}) => {
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <div className="flex-1 h-screen flex flex-col overflow-y-auto relative">
        <DashboardHeader title={title} white={white} />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
