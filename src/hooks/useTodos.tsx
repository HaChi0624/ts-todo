import { useContext } from "react";
import { ListContext } from "./ListProvider";

export const useDelete = () => {
  const { todoList, setTodoList } = useContext(ListContext);

  const deleteTodo = (id: number) => {
    const newTodoList = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList(newTodoList);
  };
  return { deleteTodo };
};

//deleteTodoに要らないuseCallBackをつけていた
