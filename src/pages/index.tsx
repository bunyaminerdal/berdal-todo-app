import StyledButton from "./components/styled/button";

import { useChangeTheme } from "@/hooks/useChangeTheme";

export default function Home() {
  const { changeTheme } = useChangeTheme();
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
          onClick={changeTheme}
        >
          Change Theme
        </StyledButton>
        <StyledButton size="medium" loading onClick={changeTheme}>
          Change Theme
        </StyledButton>
        <StyledButton size="large" onClick={changeTheme}>
          Change Theme
        </StyledButton>
      </div>
      <div className="flex gap-2 p-2">
        <StyledButton
          size="small"
          className="rounded-full uppercase"
          disabled
          variant="flat"
          onClick={changeTheme}
        >
          Change Theme
        </StyledButton>
        <StyledButton
          size="medium"
          loading
          variant="flat"
          onClick={changeTheme}
        >
          Change Theme
        </StyledButton>
        <StyledButton size="large" variant="flat" onClick={changeTheme}>
          Change Theme
        </StyledButton>
      </div>
    </div>
  );
}
