import { useState, createContext } from "react";
import { ChakraProvider, Stack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Todo } from "./Types";

import InputTodo from "./components/InputTodo";
import { TodoList } from "./components/TodoList";
import { ListProvider } from "./components/ListProvider";

const App = () => {
  const [list, setList] = useState<Array<Todo>>([]);
  const value = {
    list,
    setList,
  };

  return (
    <ChakraProvider>
      <ListProvider>
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
      </ListProvider>
    </ChakraProvider>
  );
};

export default App;
