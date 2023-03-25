//新規追加コンポーネント2
//useContextでlist,setListを管理

//InputTodo1は削除済み

import { FC, useState, memo, useContext } from "react";
import { Box, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { Todo } from "../Types";
import { PrimaryButton } from "./PrimaryButton";
import { ListContext } from "./ListProvider";

// type Props = {
//   onChange:
// }

const InputTodo2: FC = memo(() => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { todoList, setTodoList } = useContext(ListContext);

  //inputのstatusを変化
  const inputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const inputContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  //追加ボタンを押すと一覧に追加
  const onClickAdd = () => {
    if (title === "") {
      return alert("件名を入力してください");
    }
    const newTodo: Todo = { id: Math.floor(Math.random() * 1e5), title, content, status: false };
    setTodoList([...todoList, newTodo]);
    setTitle("");
    setContent("");
    console.log(newTodo); //
    console.log(todoList);
  };

  return (
    <Box p={6}>
      <FormControl>
        <FormLabel>新規追加2</FormLabel>
        <Input placeholder="件名" value={title} onChange={inputTitle} />
        <Input placeholder="内容" value={content} onChange={inputContent} />
      </FormControl>
      <PrimaryButton onClick={onClickAdd}>追加</PrimaryButton>
    </Box>
  );
});

export default InputTodo2;

//memoで囲うべきか
//props いる?
//idの設定
