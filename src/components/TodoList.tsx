import { Button, Box, Stack, Heading, Text } from "@chakra-ui/react";
import { PrimaryButton } from "./PrimaryButton";
import list from '../components/InputTodo'

export const TodoList = () => {
  const onClickDelete = () => {
    console.log(list);
  };
  return (
    <Stack p={4}>
      <h2>一覧</h2>
      <Box as={`dl`}>
        <Heading as={`dt`}>件名3</Heading>
        <Text as={`dd`}>内容3</Text>
        <Button>編集ボタン</Button>
        <PrimaryButton onClick={onClickDelete}>削除</PrimaryButton>
      </Box>
    </Stack>
  );
};

//編集ボタンを押すとモーダルウィンドウが出てくるようにしたい
//削除したtodo一覧のページを作りたい
