import Todo from "@/components/Todo";
import StyledButton from "@/components/styled/button";
import StyledInput from "@/components/styled/input";
import StyledLabel from "@/components/styled/label";
import useTodoListById from "@/hooks/useTodoListById";
import { createTodo, deleteTodo, updateTodo } from "@/services/todo";
import { useRouter } from "next/router";
import React, { RefObject, useRef, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const TodoList = () => {
  const {
    query: { todoListId },
    push,
  } = useRouter();
  const { data, error, mutate } = useTodoListById(todoListId?.toString());
  const schema = yup
    .object({
      content: yup
        .string()
        .required("Todo context is required!")
        .min(3, "Todo context must be at least 3 chars!")
        .max(100, "Todo context can't be more than 100 chars"),
    })
    .required();
  const {
    control,
    handleSubmit,
    resetField,
    formState: { isSubmitting, isValid },
  } = useForm({
    defaultValues: {
      content: "",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<TodoInput> = async (data) => {
    if (!todoListId?.toString() || !data.content) return;
    setLoadingTodo("newTodo");
    await createTodo(data.content, todoListId?.toString());
    await mutate();
    resetField("content");
    setLoadingTodo("");
  };
  const [loadingTodo, setLoadingTodo] = useState("");
  const handleUpdate = async (todo: Todo) => {
    setLoadingTodo(todo.id);
    await updateTodo({ ...todo });
    await mutate();
    setLoadingTodo("");
  };
  const handleDelete = async (todoId: string) => {
    setLoadingTodo(todoId);
    await deleteTodo(todoId);
    await mutate();
    setLoadingTodo("");
  };
  const handleReset = () => {
    console.log("reset");
  };
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
          <StyledButton onClick={() => push("/")}>Go Main</StyledButton>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-w-[400px] justify-center">
      <div className="m-10 flex w-full max-w-screen-lg flex-col justify-center gap-2 ">
        <span className="flex justify-center gap-2">
          <label>Title: </label>
          <label>{data?.title}</label>
        </span>

        <form
          onSubmit={handleSubmit(onSubmit)}
          onReset={handleReset}
          className="flex flex-row items-center gap-2"
          onKeyDown={(e) => {
            if (e.code === "enter") handleSubmit;
          }}
        >
          <Controller
            name="content"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <div className="flex w-full flex-col">
                <StyledInput
                  error={!!error}
                  label="Todo"
                  value={value}
                  onChange={onChange}
                  className="w-full"
                  disabled={isSubmitting}
                />
                {error && (
                  <StyledLabel className="text-rose-950">
                    {error?.message}
                  </StyledLabel>
                )}
              </div>
            )}
          />
          <div className="flex h-full flex-col pt-1">
            <StyledButton
              disabled={!isValid}
              loading={isSubmitting}
              className="uppercase"
              type="submit"
            >
              Add
            </StyledButton>
          </div>
        </form>

        <div className="flex flex-col">
          <hr className="my-2 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
          {loadingTodo === "newTodo" && (
            <>
              <Todo isLoading todo={{} as Todo} />
              <hr className="my-2 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
            </>
          )}
          {!data?.todos?.length ? (
            <>
              <StyledLabel>Todo List is Empty!</StyledLabel>
              <hr className="my-2 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
            </>
          ) : null}
          {data?.todos?.map((todo) => (
            <div className="flex flex-col" key={todo.id}>
              <Todo
                isLoading={loadingTodo === todo.id}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                todo={todo}
              />
              <hr className="my-2 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
