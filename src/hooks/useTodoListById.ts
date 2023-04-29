import basicApi from '@/services/basicApi';
import { BasicFetcher } from '@/utils/fetcher';
import { AxiosResponse } from 'axios';
import React from 'react'
import useSWR, { SWRResponse } from 'swr';

const useTodoListById = (todoListId: string|undefined):SWRResponse<TodoList> => {
    
  return useSWR<TodoList>(
        todoListId?`/api/todo-list/${todoListId}`:null,
        BasicFetcher
        );
}

export default useTodoListById