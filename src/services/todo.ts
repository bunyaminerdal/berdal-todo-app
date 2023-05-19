import basicApi from "./basicApi";

export const createTodo = async (
  content: string,
  todoListId: string
): Promise<Todo> => {
  const res = await basicApi.post(`/todo`, { content, todoListId });

  return res.data;
};

export const deleteTodo = async (todoId: string): Promise<any> => {
  const res = await basicApi.delete(`/todo/${todoId}`);

  return res.data;
};
export const updateTodo = async (todo: Todo): Promise<Todo> => {
  const { id, ...rest } = todo;
  const res = await basicApi.patch(`/todo/${id}`, { ...rest });

  return res.data;
};
