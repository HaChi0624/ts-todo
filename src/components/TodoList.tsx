import { FC, useContext } from "react";
import { Button, Stack, Heading, Text, VStack, Box } from "@chakra-ui/react";
import { PrimaryButton } from "./atoms/PrimaryButton";
import { ListContext } from "./ListProvider";

export const TodoList: FC = () => {
  const { todoList } = useContext(ListContext);
  const onClickDelete = () => {
    console.log(todoList);
  };
  return (
    <Stack p={4}>
      <h2>一覧</h2>
      <VStack as={`dl`}>
        {todoList.map((i) => (
          <Box key={i.id} shadow="md" backgroundColor="red" borderRadius="md">
            <Heading as={`dt`}>{i.title}</Heading>
            <Text as={`dd`}>{i.content}</Text>
            <Button>編集</Button>
            <PrimaryButton onClick={onClickDelete}>削除</PrimaryButton>
          </Box>
        ))}
      </VStack>
    </Stack>
  );
};

//編集ボタンを押すとモーダルウィンドウが出てくるようにしたい
//削除したtodo一覧のページを作りたい
//onClickDelete

//accodion で内容を出せるように
//memo()
