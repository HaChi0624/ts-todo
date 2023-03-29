import { ChakraProvider } from "@chakra-ui/react";

import InputTodo2 from "./components/InputTodo2";
import TodoList from "./components/TodoList";
import { ListProvider } from "./components/ListProvider";

const App = () => {
  return (
    <ChakraProvider>
      <ListProvider>
        <h1>題名</h1>
        <InputTodo2 />
        <TodoList />
      </ListProvider>
    </ChakraProvider>
  );
};

export default App;
