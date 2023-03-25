import { FC, useContext } from "react";
import { Button, Stack, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { PrimaryButton } from "./PrimaryButton";
import { ListContext } from "./ListProvider";

export const TodoList: FC = () => {
  const { todoList } = useContext(ListContext);
  const onClickDelete = () => {
    console.log(todoList);
  };
  return (
    <Stack p={4}>
      <h2>一覧</h2>
      <Wrap as={`dl`}>
        {todoList.map((i) => (
          <WrapItem key={i.id}>
            <Heading as={`dt`}>{i.title}</Heading>
            <Text as={`dd`}>{i.content}</Text>
            <Button>編集ボタン</Button>
            <PrimaryButton onClick={onClickDelete}>削除</PrimaryButton>
          </WrapItem>
        ))}
      </Wrap>
    </Stack>
  );
};

//編集ボタンを押すとモーダルウィンドウが出てくるようにしたい
//削除したtodo一覧のページを作りたい
//onClickDelete
