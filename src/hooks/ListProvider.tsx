import { useState, createContext, ReactNode, Dispatch, SetStateAction } from "react";
import { Todo } from "../Types";

export type ListContextType = {
  todoList: Array<Todo>;
  setTodoList: Dispatch<SetStateAction<Array<Todo>>>
};

export const ListContext = createContext<ListContextType>({} as ListContextType);

export const ListProvider = (props: {children: ReactNode}) => {
  const { children } = props;
  const [todoList, setTodoList] = useState<Array<Todo>>([]);
 
  return (
    <ListContext.Provider value={{todoList, setTodoList}}>
      {children}
    </ListContext.Provider>
  )
};


