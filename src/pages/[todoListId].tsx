import useTodoListById from '@/hooks/useTodoListById';
import basicApi from '@/services/basicApi';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import React from 'react'
import useSWR from "swr";


const TodoList = () => {
  const { query: { todoListId } } = useRouter();
  const todoList = useTodoListById(todoListId?.toString())
  return (
    <div className='flex'>
      <span>{todoList.title}</span>
    </div>
  );
}

export default TodoList