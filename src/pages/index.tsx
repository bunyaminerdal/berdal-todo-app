import StyledButton from "@/components/styled/button";

import useSWR from "swr";
import { useChangeTheme } from "@/hooks/useChangeTheme";
import Input from "@/components/styled/input";
import basicApi from '@/services/basicApi';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import { createTodoList } from '@/services/todoList';
import { useRouter } from 'next/router';
import { BasicFetcher } from '@/utils/fetcher';

export default function Home() {
  const { push } = useRouter();
// const { changeTheme } = useChangeTheme();
  const [title, setTitle] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleCreate = async () => {
    const todoList = await createTodoList(title);
    if(todoList?.id) push(`/${todoList.id}`)
    
}
  return (
    <div className="flex flex-col">
      <div className="flex align-middle">
        <nav className="z-50 flex h-16 w-full items-center justify-center gap-5 bg-slate-400 dark:bg-slate-800">
          <Link href="/">New Todo List</Link>
          <Link href="/">Share Todo List</Link>
        </nav>
      </div>
      <div className="flex flex-wrap justify-center overflow-y-auto">
        <div className="border-secondary-200 m-5 flex w-96 flex-wrap justify-center gap-2 border p-2">
          <span>Create New Todo List</span>
          <Input
            value={title}
            onChange={handleChange}
            label="Title"
            variant="outlined"
            className="w-full"
          />
          <StyledButton className="uppercase" onClick={handleCreate}>
            Create
          </StyledButton>
        </div>
      </div>
      {/* <div className="flex gap-2 p-2">
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
      </div> */}
    </div>
  );
}
