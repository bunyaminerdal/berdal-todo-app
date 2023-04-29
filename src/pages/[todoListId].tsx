import StyledButton from '@/components/styled/button';
import Input from '@/components/styled/input';
import useTodoListById from '@/hooks/useTodoListById';
import { createTodo } from '@/services/todo';
import { useRouter } from 'next/router';
import React, { useRef } from 'react'


const TodoList = () => {
  const { query: { todoListId },push } = useRouter();
  const {data,error,mutate} = useTodoListById(todoListId?.toString())
  console.log("🚀 ~ file: [todoListId].tsx:12 ~ TodoList ~ data:", data)
  const todoRef = useRef<HTMLInputElement>(null);


  const handleCreate =async () => {
    if (!todoRef.current?.value || !todoListId?.toString()) return;
    const newTodo = await createTodo(todoRef.current?.value, todoListId?.toString())
    await mutate();
    todoRef.current.value ="";
  }
  if (error) {
    return (
      <div className="m-20 flex flex-col justify-center gap-5">
        <div className="flex justify-center">
          <p> Opss, Sorry! </p>
        </div>
        <div className="flex justify-center">
          <p>{error.response?.data?.message}</p>
        </div>
        <div className="flex justify-center">
          <StyledButton onClick={()=>push('/')}>Go Main</StyledButton>
        </div>
      </div>
    );
  }

  return (
    <div className="m-10 flex flex-col justify-center gap-2">
      <div className="flex flex-row justify-center gap-2">
        <label>Title: </label>
        <label>{data?.title}</label>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Input
          label="Todo"
          variant="outlined"
          className="w-full"
          inputRef={todoRef}
        />
        <StyledButton className="uppercase" onClick={handleCreate}>
          Create
        </StyledButton>
      </div>
      <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      <div className="flex flex-col">
        {data?.todos?.map((todo) => (
          <div className='flex flex-col' key={todo.id}>
            <div className="flex flex-row gap-2">
              <label className="flex w-full items-center">{ todo.content}</label>

              <StyledButton size="small">Done</StyledButton>
              <StyledButton size="small">Delete</StyledButton>
            </div>
            <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList