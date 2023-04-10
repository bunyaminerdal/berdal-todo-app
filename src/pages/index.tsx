import StyledButton from "./components/styled/button";

import { useChangeTheme } from "@/hooks/useChangeTheme";
import Input from "./components/styled/input";

export default function Home() {
  const { changeTheme } = useChangeTheme();
  return (
    <div className="flex flex-col">
      <div className="flex">
        <nav className="z-50 h-16 w-full bg-slate-400 dark:bg-slate-800">
          Navbar
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
      <div className="flex flex-wrap gap-2 p-2">
        <Input label="Email" variant="outlined" />
        <Input label="Password" type="password" variant="flat" />
      </div>
      <div className="flex gap-2 p-2">
        <Input label="long label text" variant="flat" className="w-32" />
        <Input
          label="Controlled input"
          variant="outlined"
          value="123"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="flex gap-2 p-2">
        <Input
          label="disabled input"
          variant="outlined"
          className="w-full"
          disabled
        />
        <Input label="disabled input" variant="flat" disabled />
      </div>
    </div>
  );
}
