import { useState } from "react";
import { Todo } from "../Types";

export const useTodo = () => {
  const [todoList, setTodoList] = useState<Array<Todo>>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const inputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const inputContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const addTodo = () => {
    if (title === "") {
      return alert("件名を入力してください");
    }
    const newTodo: Todo = {
      id: todoList.length,
      title,
      content,
      status: false,
    };
    setTodoList([...todoList, newTodo]);
    setTitle("");
    setContent("");
    console.log(newTodo); //後で消す
  };

  const deleteTodo = (id: number) => {
    const newTodoList = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList(newTodoList);
  };
  return {
    todoList,
    title,
    content,
    inputTitle,
    inputContent,
    addTodo,
    deleteTodo,
  };
};

//deleteTodoに要らないuseCallBackをつけていた
//まだmemo,useCallbackの使いどころが分かってない
