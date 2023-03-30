import { FC, memo, useContext } from "react";
import { Button, Box, Heading, Text, VStack } from "@chakra-ui/react";
// import { PrimaryButton } from "./atoms/PrimaryButton";
import { ListContext } from "./ListProvider";
import { useDelete } from "../hooks/useDelete";




const TodoList: FC = memo(() => {
  const { todoList } = useContext(ListContext); 
  const { deleteTodo } = useDelete();

  return (
    <VStack p={4}>
      <h2>Todo一覧</h2>
        {todoList.map((item) => (
          <Box
            as={`dl`}
            key={item.id}
            shadow="md"
            backgroundColor="teal.100"
            borderRadius="md"
          >
            <Heading as={`dt`} mx={{md:60}}>{item.title}</Heading>
            <Text as={`dd`}>{item.content}</Text>
            <Button onClick={}>編集</Button>
            <Button onClick={() => deleteTodo(item.id)}>削除</Button>
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

