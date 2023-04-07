import { FC, memo } from "react";
import { Box, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { PrimaryButton } from "../components/atoms/PrimaryButton";

type Props = {
  title: string;
  content: string;
  inputTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputContent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addTodo: () => void;
};

const InputTodo2: FC<Props> = memo((props) => {
  const { title, content, inputTitle, inputContent, addTodo } = props;

  return (
    <Box px={{ md: 80 }}>
      <FormControl pb={{ sm: 3 }}>
        <FormLabel>新規追加</FormLabel>
        <Input
          placeholder="件名: 歯を磨く"
          value={title}
          onChange={inputTitle}
        />
        <Input
          placeholder="内容: 寝る前に必ず"
          value={content}
          onChange={inputContent}
        />
      </FormControl>
      <PrimaryButton onClick={addTodo}>追加</PrimaryButton>
    </Box>
  );
});

export default InputTodo2;

//memoで囲うべきか
//props いる?
//idの設定

//onSubmit onClickどちらを使うべきか
