import { ChakraProvider } from "@chakra-ui/react";

import { useTodo } from "./hooks/useTodo";

import InputTodo2 from "./components/pages/InputTodo2";
import TodoList from "./components/pages/TodoList";

const App = () => {
  const {
    todoList,
    deleteTodo,
    title,
    content,
    inputTitle,
    inputContent,
    addTodo,
    updateTodo,
    editTitle,
    editContent,
    toggleTodoDone,
  } = useTodo();
  return (
    <ChakraProvider>
      <h1>題名</h1>
      <InputTodo2
        title={title}
        content={content}
        inputTitle={inputTitle}
        inputContent={inputContent}
        addTodo={addTodo}
      />
      <TodoList
        todoList={todoList}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        editTitle={editTitle}
        editContent={editContent}
        toggleTodoDone={toggleTodoDone}
      />
    </ChakraProvider>
  );
};

export default App;
