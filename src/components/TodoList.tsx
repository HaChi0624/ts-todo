import { FC, memo, useContext, useState } from "react";
import { Button, Stack, Heading, Text, VStack, Box } from "@chakra-ui/react";
import { PrimaryButton } from "./atoms/PrimaryButton";
import { ListContext } from "./ListProvider";
import { useDelete } from "../hooks/useDelete";

const TodoList: FC = memo(() => {
  const { todoList } = useContext(ListContext);
  const { deleteTodo } = useDelete();
  const [todoId, setTodoId] = useState<number>();

  //削除
  const onClickDelete = () => deleteTodo(todoId);

  //編集

  return (
    <Stack p={4}>
      <h2>一覧</h2>
      <VStack as={`dl`}>
        {todoList.map((item) => (
          <Box
            key={item.id}
            shadow="md"
            backgroundColor="teal.100"
            borderRadius="md"
          >
            <Heading as={`dt`}>{item.title}</Heading>
            <Text as={`dd`}>{item.content}</Text>
            <Button>編集</Button>
            <Button onClick={onClickDelete}>削除</Button>
          </Box>
        ))}
      </VStack>
    </Stack>
  );
});

export default TodoList;

//編集ボタンを押すとモーダルウィンドウが出てくるようにしたい
//削除したtodo一覧のページを作りたい
//onClickDelete

//accodion で内容を出せるように
//memo()
