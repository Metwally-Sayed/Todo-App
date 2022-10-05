import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { BiCheckCircle } from 'react-icons/bi';

export default function TodoItem({ removeTodo, completeTodo, importantTodo ,filteredData}) {
  return (
    filteredData().map((todo)=>
    <div
      className={todo.completed ? 'todo-row complete' : 'todo-row'}
      style={todo.important ? { background: 'orange' } : {}}
      key={todo.id}
    >
      {todo.text}
      <div className="iconsContainer">
        <button
          onClick={() => importantTodo(todo.id)}
          className="important-btn"
        >
          !
        </button>
        <RiCloseCircleLine
          style={{ marginRight: 5 }}
          onClick={() => removeTodo(todo.id)}
        />
        <BiCheckCircle onClick={() => completeTodo(todo.id)} />
      </div>
    </div>
    )
  );
}
