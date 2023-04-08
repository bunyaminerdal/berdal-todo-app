import React, { PropsWithChildren } from "react";
import BeThemeProvider from "./ThemeProvider";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <BeThemeProvider>{children}</BeThemeProvider>
    </>
  );
};

export default Providers;
