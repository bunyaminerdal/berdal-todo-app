import React from "react";
import StyledLabel from "./styled/label";
import StyledButton from "./styled/button";
import { ImCheckmark, ImCross } from "react-icons/im";
import { BsTrash } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

interface todoProps {
  todo: Todo;
  isLoading?: boolean;
  handleDelete?: (todoId: string) => void;
  handleUpdate?: (todo: Todo) => void;
}

const Todo = ({ todo, isLoading, handleDelete, handleUpdate }: todoProps) => {
  return (
    <div className="relative flex w-full flex-row gap-2  px-2">
      {isLoading && (
        <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-row items-center justify-center bg-slate-400 bg-opacity-10">
          <CgSpinner className="animate-spin" />
        </div>
      )}
      <StyledLabel className={` ${todo.isDone && "line-through"}`}>
        {todo.content}
      </StyledLabel>

      <StyledButton
        disabled={isLoading}
        size="small"
        onClick={() =>
          handleUpdate && handleUpdate({ ...todo, isDone: !todo.isDone })
        }
      >
        {todo.isDone ? <ImCross /> : <ImCheckmark />}
      </StyledButton>
      <StyledButton
        disabled={isLoading}
        size="small"
        onClick={() => handleDelete && handleDelete(todo.id)}
      >
        <BsTrash />
      </StyledButton>
    </div>
  );
};

export default Todo;
