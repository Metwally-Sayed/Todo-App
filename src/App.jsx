import React, { useState, useEffect } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import Filter from './components/Filter';

function App() {
  const id = uuidv4();
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || [],
  );

  const [filter, setFilter] = useState('ALL');

  const filteredData = () => {
    switch (filter) {
      case 'COMPLETED':
        return todos.filter((todo) => todo.completed === true);
        break;
      case 'UNCOMPLETED':
        return todos.filter((todo) => todo.completed === false);
        break;
      case 'ALL':
      default:
        return todos;
        break;
    }
  };

  const switchFilter = (text) => {
    setFilter(text);
  };

  const checkTodos = () => {
    const completedTodos = todos.map((todo) => {
      todo.completed = true;
      return todo;
    });
    setTodos(completedTodos);
  };

  const unCheckTodos = () => {
    const unCompletedTodo = todos.map((todo) => {
      todo.completed = false;
      return todo;
    });
    setTodos(unCompletedTodo);
  };

  const addTodo = (text) => {
    let todo = { id: id, text: text, completed: false, important: false };
    let newTodos = [...todos, todo];
    // console.log(todo.id);
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    let updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const importantTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.important = !todo.important;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };
  let sortedTodos = todos.sort((a, b) => b.important - a.important);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <Filter
        switchFilter={switchFilter}
        checkTodos={checkTodos}
        unCheckTodos={unCheckTodos}
      />
      <hr className="seperator" />
      <TodoItem
        removeTodo={removeTodo}
        completeTodo={completeTodo}
        importantTodo={importantTodo}
        filteredData={filteredData}
      />
    </div>
  );
}

export default App;
