import React, { useState } from "react";
import StyledButton from "./styled/button";
import { ImCheckmark, ImCross } from "react-icons/im";
import { BsTrash, BsCheckCircle } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import StyledInput from "./styled/input";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Tooltip from "./styled/tooltip";
interface todoProps {
  todo: Todo;
  isLoading?: boolean;
  handleDelete?: (todoId: string) => void;
  handleUpdate?: (todo: Todo) => void;
}

const Todo = ({ todo, isLoading, handleDelete, handleUpdate }: todoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const schema = yup
    .object({
      content: yup
        .string()
        .required("Todo context is required!")
        .min(3, "Todo context must be at least 3 chars!")
        .max(100, "Todo context can't be more than 100 chars"),
    })
    .required();
  const defaultValues = {
    content: todo.content,
  };
  const {
    control,
    resetField,
    getValues,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<TodoInput> = async (data) => {
    if (!isEditing || !data.content) return;
    handleUpdate && handleUpdate({ ...todo, content: getValues("content") });
    setIsEditing(false);
  };
  return (
    <div className="relative flex w-full flex-row gap-2  px-2">
      {isLoading && (
        <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-row items-center justify-center bg-slate-400 bg-opacity-10">
          <CgSpinner className="animate-spin" />
        </div>
      )}
      {isEditing ? (
        <form
          className="flex w-full flex-row gap-2"
          onSubmit={handleSubmit(onSubmit)}
          onKeyDown={(e) => {
            if (e.code === "enter") handleSubmit;
          }}
        >
          <Tooltip text="Ok" position="top-left">
            <StyledButton
              loading={isLoading}
              disabled={!isValid}
              size="small"
              type="submit"
            >
              <BsCheckCircle />
            </StyledButton>
          </Tooltip>
          <Tooltip text="Cancel" position="top-left">
            <StyledButton
              loading={isLoading}
              size="small"
              onClick={() => {
                setIsEditing(false);
                resetField("content");
              }}
            >
              <ImCancelCircle />
            </StyledButton>
          </Tooltip>

          <Controller
            name="content"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <div className="w-full">
                <StyledInput
                  error={!!error}
                  className="h-9 w-full"
                  value={value}
                  onChange={onChange}
                />
                {error && (
                  <div className="w-full text-rose-600">{error?.message}</div>
                )}
              </div>
            )}
          />
        </form>
      ) : (
        <>
          <label
            className={`w-full self-center ${todo.isDone && "line-through"}`}
          >
            {todo.content}
          </label>
          <Tooltip
            text={`${todo.isDone ? "Incomplete" : "Complete"}`}
            // position="top-left"
            position="top-right"
          >
            <StyledButton
              disabled={isLoading}
              size="small"
              onClick={() =>
                handleUpdate && handleUpdate({ ...todo, isDone: !todo.isDone })
              }
            >
              {todo.isDone ? <ImCross /> : <ImCheckmark />}
            </StyledButton>
          </Tooltip>
          <Tooltip
            text="Edit"
            // position="top-left"
            position="top-right"
          >
            <StyledButton
              disabled={isLoading}
              size="small"
              onClick={() => setIsEditing(true)}
            >
              <FaRegEdit />
            </StyledButton>
          </Tooltip>
          <Tooltip
            text="Delete"
            // position="top-left"
            position="top-right"
          >
            <StyledButton
              disabled={isLoading}
              size="small"
              onClick={() => handleDelete && handleDelete(todo.id)}
            >
              <BsTrash />
            </StyledButton>
          </Tooltip>
        </>
      )}
    </div>
  );
};

export default Todo;
