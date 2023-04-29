import StyledButton from "@/components/styled/button";

import useSWR from "swr";
import { useChangeTheme } from "@/hooks/useChangeTheme";
import StyledInput from "@/components/styled/input";
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
    <div className="flex w-full justify-center">
      <div className="m-5 flex  max-w-md flex-col justify-center gap-2">
        <span className='flex justify-center'>Create New Todo List</span>
        <StyledInput
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
  );
}
