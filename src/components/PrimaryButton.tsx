//主要ボタン


import { Button } from "@chakra-ui/react";
import { FC, ReactNode, memo } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, onClick } = props;
  return <Button color='teal.500' variant='solid' onClick={onClick}>{children}</Button>;
});

//loadingも作りたい