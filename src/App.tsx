import { ChakraProvider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react"
import { Box } from "@chakra-ui/layout";
import { InputTodo } from "./components/InputTodo";

const App = () => {
  return (
    <ChakraProvider>
      <h1>題名</h1>
      <InputTodo />
      <Box>
        <h2>一覧</h2>
        <dl>
          <dt>件名1</dt>
          <dd>内容1</dd>
          <Button>編集ボタン</Button>
          編集ボタンを押すとモーダルウィンドウが出てくるようにしたい
          <Button>削除ボタン</Button>
          削除したtodo一覧のページを作りたい
        </dl>
        <dl>
          <dt>件名2</dt>
          <dd>内容2</dd>
          <Button>編集ボタン</Button>
          <Button>削除ボタン</Button>
        </dl>
      </Box>
    </ChakraProvider>
  );
};

export default App;
