import React from "react";

export const Todos = (props) => {
  const { todoList, onClickDelete } = props;
  
  return (
    <div className="list-area">
      <p className="title">TODO一覧</p>
      <ul>
        {todoList.map((todo, index) => {
          return (
            //todoの中身を取り出したい
            //App.jsのonClickAddのnewContent  
            <div key={todo.title} className="list-row">
              <li>
                <input type='checkbox'/>
                <div className="li-title">{todo.title}</div>
                <div>{todo.text}</div>
              </li>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
