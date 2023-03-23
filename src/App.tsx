import { ChakraProvider, Stack } from "@chakra-ui/react";
import { Button, Box } from "@chakra-ui/react"
import InputTodo from "./components/InputTodo";
import { TodoList } from "./components/TodoList";

const App = () => {
  return (
    <ChakraProvider>
      <h1>題名</h1>
      <InputTodo />
      <Stack p={4}>
        <h2>一覧</h2>
        <dl>
          <dt>件名1</dt>
          <dd>内容1</dd>
          <Button>編集ボタン</Button>
          <Button>削除ボタン</Button>
        </dl>
        <dl>
          <dt>件名2</dt>
          <dd>内容2</dd>
          <Button>編集ボタン</Button>
          <Button>削除ボタン</Button>
        </dl>
      </Stack>
      <TodoList />
    </ChakraProvider>
  );
};

export default App;
