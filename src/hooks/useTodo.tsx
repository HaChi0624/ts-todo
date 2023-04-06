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
      done: false,
    };
    setTodoList([...todoList, newTodo]);
    setTitle("");
    setContent("");
    // console.log(newTodo); //後で消す
  };

  // 削除
  const deleteTodo = (id: number) => {
    const newTodoList = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList(newTodoList);
  };

  // 更新
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const updateTodo = (id: number) => {
    const changeTodo: Todo = {
      id,
      title: newTitle || title,
      content: newContent || content,
      done: false,
    };
    const newTodoList = todoList.filter((todo) => {
      return todo.id !== id;
    }); //前のTodoを消すため
    setTodoList([...newTodoList, changeTodo]);
    setTitle("");
    setContent("");
    console.log(todoList); //後で消す
  };

  //done
  const toggleTododone = (id: number, done: boolean) => {};

  const editTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };
  const editContent = (e: ChangeEvent<HTMLInputElement>) => {
    setNewContent(e.target.value);
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
    editContent,
  };
};

//deleteTodoに要らないuseCallBackをつけていた
//まだmemo,useCallbackの使いどころが分かってない
