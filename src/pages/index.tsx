import StyledButton from "@/components/styled/button";

import StyledInput from "@/components/styled/input";
import { createTodoList } from "@/services/todoList";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import StyledLabel from "@/components/styled/label";
export default function Home() {
  const { push } = useRouter();
  const schema = yup
    .object({
      title: yup
        .string()
        .required("Todo List title is required!")
        .min(3, "Todo List title must be at least 3 chars!")
        .max(100, "Todo List title can't be more than 100 chars"),
    })
    .required();
  const {
    control,
    handleSubmit,
    resetField,
    formState: { isSubmitting, isValid },
  } = useForm({
    defaultValues: {
      title: "",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<TodoListInput> = async (data) => {
    if (!data.title) return;
    const todoList = await createTodoList(data.title);
    if (todoList?.id) push(`/${todoList.id}`);
    resetField("title");
  };
  return (
    <div className="flex w-full justify-center">
      <div className="m-5 flex w-full flex-col justify-center gap-2 sm:w-1/2 lg:w-1/3">
        <span className="flex justify-center">Create New Todo List</span>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-2"
          onKeyDown={(e) => {
            if (e.code === "enter") handleSubmit;
          }}
        >
          <Controller
            name="title"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <div className="flex w-full flex-col">
                <StyledInput
                  error={!!error}
                  label="Todo List Title"
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
              Create
            </StyledButton>
          </div>
        </form>
      </div>
    </div>
  );
}
