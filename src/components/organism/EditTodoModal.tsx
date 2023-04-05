import { ChangeEvent, FC, memo } from "react";
import {
  useDisclosure,
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
  Box,
  Stack,
  Select,
} from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/PrimaryButton";

type Props = {
  id: number;
  newTitle: string;
  content: string;
  status: boolean;
  isOpen: boolean;
  onClose: () => void;
  editTitle: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const EditTodoModal: FC<Props> = memo((props) => {
  const { id, newTitle, content, status, isOpen, onClose, editTitle } = props;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>編集内容</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <FormControl key={id}>
                <FormLabel>件名</FormLabel>
                <Input value={newTitle} onChange={editTitle} />
              </FormControl>
              <FormControl>
                <FormLabel>内容</FormLabel>
                <Input value={content} />
              </FormControl>
              <FormControl>
                <FormLabel>ステータス</FormLabel>
                <Button>{status !== false ? "完了" : "未完了"}</Button>
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <PrimaryButton onClick={() =>alert(newTitle)}>保存</PrimaryButton>
            {/* stateの更新をしたい */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});

