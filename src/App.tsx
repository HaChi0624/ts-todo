import { ChakraProvider } from "@chakra-ui/react";

import InputTodo2 from "./components/pages/InputTodo2";
import TodoList from "./components/pages/TodoList";
import { ListProvider } from "./hooks/ListProvider";

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
