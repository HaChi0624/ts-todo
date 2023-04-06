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
  id: number;
  newTitle: string;
  newContent: string;
  done: boolean;
  isOpen: boolean;
  onClose: () => void;
  updateTodo: (id: number) => void;
  editTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  editContent: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const EditTodoModal: FC<Props> = memo((props) => {
  const {
    id,
    newTitle,
    newContent,
    done,
    isOpen,
    onClose,
    editTitle,
    editContent,
    updateTodo,
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
              <FormControl key={id}>
                <FormLabel>件名</FormLabel>
                <Input placeholder={newTitle} onChange={editTitle} />
              </FormControl>
              <FormControl>
                <FormLabel>内容</FormLabel>
                <Input placeholder={newContent} onChange={editContent} />
              </FormControl>
              <FormControl>
                <FormLabel>ステータス</FormLabel>
                <Button>{done !== false ? "完了" : "未完了"}</Button>
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <PrimaryButton
              onClick={() => {
                updateTodo(id);
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
