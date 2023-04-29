type TodoList = {
  id: string;
  title: string;
  todos?:Todo[]
};
type Todo = {
  id: string;
  content: string;
  isDone: boolean;
  todoListId: string;
};
type TodoInput = {
  content: string;
}