import { ChangeEvent, FC, memo } from "react";
import {
  Button,
  Box,
  Heading,
  Text,
  VStack,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
// import { PrimaryButton } from "./atoms/PrimaryButton";
import { EditTodoModal } from "../organism/EditTodoModal";
import { Todo } from "../../Types";

type Props = {
  todoList: Todo[];
  deleteTodo: (id: number) => void;
  updateTodo: (id: number) => void;
  editTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  editContent: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TodoList: FC<Props> = memo((props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { todoList, deleteTodo, updateTodo, editTitle, editContent } = props;

  const toggleButton = (todo: Todo, id:number) => {
    if (todo.id === id) {
      todo.done = !todo.done;
    }
    
  };

  return (
    <VStack p={4}>
      <h2>Todo一覧</h2>
      {todoList.map((todo) => (
        <Box
          as={`dl`}
          key={todo.id}
          shadow="md"
          backgroundColor="teal.100"
          borderRadius="md"
        >
          <Heading as={`dt`} mx={{ md: 60 }}>
            {todo.id}
            {todo.title}
          </Heading>
          <Text as={`dd`}>{todo.content}</Text>
          <HStack>
            <Button onClick={() => toggleButton(todo,todo.id)}>
              {todo.done !== false ? "完了" : "未完了"}
            </Button>
            <Box>
              <Button onClick={onOpen}>編集</Button>
              <EditTodoModal
                isOpen={isOpen}
                onClose={onClose}
                id={todo.id}
                newContent={todo.content}
                newTitle={todo.title}
                done={todo.done}
                updateTodo={updateTodo}
                editTitle={editTitle}
                editContent={editContent}
              />
            </Box>
            <Button onClick={() => deleteTodo(todo.id)}>削除</Button>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
});

export default TodoList;

//編集ボタンを押すとモーダルウィンドウが出てくるようにしたい
//削除したtodo一覧のページを作りたい
//onClickDelete

//accodion で内容を出せるように
//memo()

//削除機能がうまくいっていなかった。
//deleteTodo()の引数をどうするか分からなかった。
// const onClickDelete = () => deleteTodo(todoId)
//<Button onClick={onClickDelete} >削除</Button>
