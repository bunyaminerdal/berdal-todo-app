import { useTheme } from "next-themes";
import StyledButton from "./components/styled/button";
export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex flex-col">
      <div className="flex">
        <nav className="z-50 h-16 w-full bg-slate-400 dark:bg-slate-800">
          asdfd
        </nav>
      </div>
      <div className="flex gap-2 p-2">
        <StyledButton
          size="small"
          className="uppercase"
          disabled
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          deneme
        </StyledButton>
        <StyledButton
          size="medium"
          loading
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          deneme
        </StyledButton>
        <StyledButton
          size="large"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          deneme
        </StyledButton>
      </div>
      <div className="flex gap-2 p-2">
        <StyledButton
          size="small"
          className="uppercase"
          disabled
          variant="flat"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          deneme
        </StyledButton>
        <StyledButton
          size="medium"
          loading
          variant="flat"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          deneme
        </StyledButton>
        <StyledButton
          size="large"
          variant="flat"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          deneme
        </StyledButton>
      </div>
    </div>
  );
}
