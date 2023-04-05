import React, { ChangeEvent, FC, memo, useContext } from "react";
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
import { Todo } from "../../Types";

type Props = Todo & {
  isOpen: boolean;
  onClose: () => void;
};

export const EditTodoModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, id , title, content, status } = props;
  const editTitle = (e: ChangeEvent<HTMLInputElement>) => {
    
  }

  const onCkickUpdate = () => {};

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
                <Input value={title} onChange={editTitle}/>
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
            <PrimaryButton onClick={onCkickUpdate}>保存</PrimaryButton>
            {/* stateの更新をしたい */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});

// export const editTodo = () => {
//     const { isOpen, onOpen, onClose } = useDisclosure()

//   const initialRef = React.useRef(null)
//   const finalRef = React.useRef(null)

//   return (
//     <>
//       <Button onClick={onOpen}>編集</Button>

//       <Modal
//         initialFocusRef={initialRef}
//         finalFocusRef={finalRef}
//         isOpen={isOpen}
//         onClose={onClose}
//       >
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>編集</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody pb={6}>
//             <FormControl>
//               <FormLabel>件名</FormLabel>
//               <Input ref={initialRef} placeholder='件名' />
//             </FormControl>

//             <FormControl mt={4}>
//               <FormLabel>内容</FormLabel>
//               <Input placeholder='内容' />
//             </FormControl>
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme='blue' mr={3}>
//               Save
//             </Button>
//             <Button onClick={onClose}>Cancel</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   )
// }
