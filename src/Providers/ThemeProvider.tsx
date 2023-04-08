import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";

const BeThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </>
  );
};

export default BeThemeProvider;
