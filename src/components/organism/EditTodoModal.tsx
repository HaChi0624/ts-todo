import { ChangeEvent, FC, memo } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Stack,
} from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/PrimaryButton";

type Props = {
  todoId: number;
  newTitle: string;
  newContent: string;
  done: boolean;
  isOpen: boolean;
  onClose: () => void;
  updateTodo: (id: number) => void;
  editTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  editContent: (e: ChangeEvent<HTMLInputElement>) => void;
  toggleTodoDone: (id: number) => void;
};

export const EditTodoModal: FC<Props> = memo((props) => {
  const {
    todoId,
    newTitle,
    newContent,
    done,
    isOpen,
    onClose,
    editTitle,
    editContent,
    updateTodo,
    toggleTodoDone,
  } = props;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>編集内容</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <FormControl key={todoId}>
                <FormLabel>件名</FormLabel>
                <Input placeholder={newTitle} onChange={editTitle} />
              </FormControl>
              <FormControl>
                <FormLabel>内容</FormLabel>
                <Input placeholder={newContent} onChange={editContent} />
              </FormControl>
              <FormControl>
                <FormLabel>ステータス</FormLabel>
                <Button onClick={() => toggleTodoDone(todoId)}>{done !== false ? "完了" : "未完了"}</Button>
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <PrimaryButton
              onClick={() => {
                updateTodo(todoId);
              }}
            >
              保存
            </PrimaryButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});

//保存を押したらモーダルが閉じるようにしたい
