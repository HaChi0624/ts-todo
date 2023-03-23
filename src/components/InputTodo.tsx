import { FC, useState } from "react";
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Todo } from "../Types";

// type Props = {
//   onChange: 
// }

export const InputTodo: FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [list, setList] = useState<Array<Todo>>([]);

  //inputのstatusを変化
  const inputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const inputContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
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
    console.log(newTodo)//後で消す
  };

  return (
    <Box p={6}>
      <FormControl>
        <FormLabel>新規追加</FormLabel>
        <Input placeholder="件名" value={title} onChange={inputTitle} />
        <Input placeholder="内容" value={content} onChange={inputContent} />
        <Button onClick={onClickAdd}>
          追加ボタン
        </Button>
      </FormControl>
    </Box>
  );
};

//memoで囲うべきか
