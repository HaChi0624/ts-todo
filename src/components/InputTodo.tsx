import React from 'react'

export const InputTodo = (props) => {

  const {todoTitle, todoText, onClick, onChangeText, onChangeTitle} = props;

  return (
    <div>
      <form>
        <div>
          <label>
            タイトル:
            <input value={todoTitle} onChange={onChangeTitle}/>
          </label>
          <label>
            詳細:
            <input value={todoText} onChange={onChangeText}/>
          </label>
        </div>
      </form>
      <button onClick={onClick}>追加</button>
    </div>
  );
}