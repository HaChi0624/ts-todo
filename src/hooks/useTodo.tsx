import { ChangeEvent, useState } from "react";
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

  //追加
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

  // 削除
  const deleteTodo = (id: number) => {
    const newTodoList = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList(newTodoList);
  };

  // 更新
  // const [newTitle, setNewTitle] = useState('')

  const updateTodo = (id:number) => {
    const changeTodo: Todo = {
      id,
      title: newTitle,
      content,
      status: false || true,
    }
    setTodoList([...todoList, changeTodo])
    setTitle(newTitle);
  }

  const editTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return {
    todoList,
    title,
    content,
    inputTitle,
    inputContent,
    addTodo,
    deleteTodo,
    updateTodo,
    editTitle,
  };
};

//deleteTodoに要らないuseCallBackをつけていた
//まだmemo,useCallbackの使いどころが分かってない
