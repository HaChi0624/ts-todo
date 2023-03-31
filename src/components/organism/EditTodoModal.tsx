import React, { FC, memo, useContext } from "react";
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
} from "@chakra-ui/react";
import { Todo } from "../../Types";
import { ListContext } from "../../hooks/ListProvider";
import { PrimaryButton } from "../atoms/PrimaryButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const EditTodoModal: FC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  const { todoList } = useContext(ListContext);

  const onCkickUpdate = () => {};

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>編集内容</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <FormControl>
                <FormLabel>件名</FormLabel>
                <Input />
              </FormControl>
              <FormControl>
                <FormLabel>内容</FormLabel>
                <Input />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <PrimaryButton onClick={onCkickUpdate}>保存</PrimaryButton>{" "}
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
