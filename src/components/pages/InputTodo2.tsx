//新規追加コンポーネント2
//useContextでlist,setListを管理

//InputTodo1は削除済み

import { FC, useState, memo, useContext } from "react";
import { Box, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { Todo } from "../../Types";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { ListContext } from "../../hooks/ListProvider";

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

  return (
    <Box px={{ md: 80 }}>
      <FormControl pb={{ sm: 3 }}>
        <FormLabel>新規追加</FormLabel>
        <Input
          placeholder="件名: 歯を磨く"
          value={title}
          onChange={inputTitle}
        />
        <Input
          placeholder="内容: 寝る前に必ず"
          value={content}
          onChange={inputContent}
        />
      </FormControl>
      <PrimaryButton onClick={onClickAdd}>追加</PrimaryButton>
    </Box>
  );
});

export default InputTodo2;

//memoで囲うべきか
//props いる?
//idの設定

//onSubmit onClickどちらを使うべきか
