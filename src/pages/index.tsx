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
      <div className="flex">
        <StyledButton
          className="m-4"
          variant="outlined"
          size="small"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          Theme
        </StyledButton>
        <StyledButton
          className="m-4"
          variant="outlined"
          size="medium"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          Theme
        </StyledButton>
        <StyledButton
          className="m-4"
          variant="outlined"
          size="large"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          Theme
        </StyledButton>
        <StyledButton
          className="m-4"
          variant="filled"
          size="small"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          Change
        </StyledButton>
        <StyledButton
          className="m-4"
          variant="filled"
          size="medium"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          Change
        </StyledButton>
        <StyledButton
          className="m-4"
          variant="filled"
          size="large"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          Change
        </StyledButton>
        <button className="btn-primary">asdf</button>
        <h1>Hello Word!</h1>
      </div>
    </div>
  );
}
