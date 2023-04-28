import basicApi from '@/services/basicApi';
import { AxiosResponse } from 'axios';
import React from 'react'
import useSWR, { SWRResponse } from 'swr';

const useTodoListById = (todoListId: string|undefined):TodoList => {
    
    const {data}=useSWR<AxiosResponse<TodoList>>(
        todoListId?`/api/todo-list/${todoListId}`:null,
        basicApi
        );
  return data?.data??{} as TodoList
}

export default useTodoListById