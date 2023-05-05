import StyledNavbar from "@/components/styled/navbar";
import React, { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className=" min-w-[370px]">
      <div className="flex w-full">
        <StyledNavbar />
      </div>
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

export default MainLayout;
