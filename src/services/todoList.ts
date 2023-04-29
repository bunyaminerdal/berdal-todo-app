import basicApi from './basicApi';

export const createTodoList = async (title: string): Promise<TodoList> => {
  const res = await basicApi.post(`/api/todo-list`,{title:title});

  return res.data;
};

export const deleteTodoList = async (
  todoListId: string
): Promise<any> => {
  const res = await basicApi.delete(`/api/todo-list/${todoListId}`);

  return res.data;
};
export const updateTodoList = async (todoList: TodoList): Promise<TodoList> => {
    const { id, ...rest } = todoList;
  const res = await basicApi.patch(`/api/todo-list/${id}`,{...rest});

  return res.data;
};