import { useState, createContext, ReactNode, Dispatch, SetStateAction } from "react";
import { Todo } from "../Types";

export type ListContextType = {
  list: Array<Todo>;
  setList: Dispatch<SetStateAction<Array<Todo>>>
};

export const ListContext = createContext<ListContextType>({} as ListContextType);

export const ListProvider = (props: {children: ReactNode}) => {
  const { children } = props;
  const [list, setList] = useState<Array<Todo>>([]);

  return (
    <ListContext.Provider value={{list, setList}}>
      {children}
    </ListContext.Provider>
  )
};


