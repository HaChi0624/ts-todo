//新規追加コンポーネント

import { FC, useState, memo } from "react";
import { Box, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { Todo } from "../Types";
import { PrimaryButton } from "./PrimaryButton";

// type Props = {
//   onChange:
// }

const InputTodo: FC = memo(() => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [list, setList] = useState<Array<Todo>>([]);

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
    const newTodo: Todo = { id: 1, title, content, status: false };
    setList([...list, newTodo]);
    setTitle("");
    setContent("");
    console.log(newTodo);
  };

  return (
    <Box p={6}>
      <FormControl>
        <FormLabel>新規追加</FormLabel>
        <Input placeholder="件名" value={title} onChange={inputTitle} />
        <Input placeholder="内容" value={content} onChange={inputContent} />
      </FormControl>
      <PrimaryButton onClick={onClickAdd}>追加</PrimaryButton>
    </Box>
  );
});

export default InputTodo;

//memoで囲うべきか
//props いる?
//idの設定
