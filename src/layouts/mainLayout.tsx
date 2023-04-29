import StyledNavbar from "@/components/styled/navbar";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-w-max flex-col">
      <div className="flex">
        <StyledNavbar />
      </div>
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

export default MainLayout;
