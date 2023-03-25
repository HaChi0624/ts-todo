import { FC, useContext } from "react";
import { Button, Box, Stack, Heading, Text } from "@chakra-ui/react";
import { PrimaryButton } from "./PrimaryButton";
import { ListContext } from "./ListProvider";


export const TodoList: FC = () => {
  const List = useContext(ListContext)
  const onClickDelete = () => {
    console.log(List.list);
  };
  return (
    <Stack p={4}>
      <h2>一覧</h2>
      <Box as={`dl`}>
        <Heading as={`dt`}>件名3</Heading>
        <Heading>{List.list}</Heading>
        <Text as={`dd`}>内容3</Text>
        <Button>編集ボタン</Button>
        <PrimaryButton onClick={onClickDelete}>削除</PrimaryButton>
      </Box>
    </Stack>
  );
};

//編集ボタンを押すとモーダルウィンドウが出てくるようにしたい
//削除したtodo一覧のページを作りたい
//onClickDelete
