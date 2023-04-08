import { useTheme } from "next-themes";

export const useChangeTheme = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  return { theme, changeTheme };
};
