import './App.css';
import { useState } from 'react';
import { InputTodo } from './components/InputTodo';
import { Todos } from './components/Todos';

const App = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoText, setTodoText] = useState('');

  const [todoList, settodoList] = useState([]);

  const onClickAdd = () => {
    if (todoTitle === "") return;
    //セットでリストに入れたい
    // const newContent = [todoTitle, todoText]
    const newContent = {
      title: todoTitle,
      text: todoText
    }
    const newTodoList = [...todoList, newContent];
    settodoList(newTodoList);
    setTodoTitle("");
    setTodoText("");
    console.log(newContent)
  };



  const onChangeTodoText =(e) => {
    setTodoText(e.target.value)
  };

  const onChangeTodoTitle =(e) => {
    setTodoTitle(e.target.value)
  };


  const onClickDelete = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    settodoList(newTodoList);
  };


  return (
    <div className='App'>
      <h1>俺のTODO</h1>

      <div className='addContent'>
        <h2>todo作成</h2>
        <p>追加ボタンを押したら一覧に内容が移動して、formの内容を空にする</p>

        <InputTodo todoTitle={todoTitle} todoText={todoText} onChangeTitle={onChangeTodoTitle} onChangeText={onChangeTodoText} onClick={onClickAdd}/>
      </div>
        
      <div>
        <Todos todoList={todoList} onClickDelete={onClickDelete} />
      </div>
    </div>
  );
}

export default App;
