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
import { useToggleButton } from "../../hooks/useToggleButton"
import { EditTodoModal } from "../organism/EditTodoModal";
import { Todo } from "../../Types";

type Props = {
  todoList: Todo[];
  deleteTodo: (id: number) => void;
  editTitle: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TodoList: FC<Props> = memo((props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { todoList, deleteTodo, editTitle } = props;
  const { toggleButton } = useToggleButton();
  
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
            {todo.title}
          </Heading>
          <Text as={`dd`}>{todo.content}</Text>
          <HStack >
            <Button onClick={() => console.log(todo.status)
}>{todo.status !== false ? "完了" : "未完了"}</Button>
            <Box>
              <Button onClick={onOpen}>編集</Button>
              <EditTodoModal
                isOpen={isOpen}
                onClose={onClose}
                id={todo.id}
                content={todo.content}
                newTitle={todo.title}
                status={todo.status}
                editTitle={editTitle}             />
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
