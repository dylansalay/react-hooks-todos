import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      content: 'Pickup Dry Cleaning',
      isCompleted: true,
    },
    {
      content: 'Get a Haircut',
      isCompleted: false,
    },
    {
      content: 'Make Dinner',
      isCompleted: false,
    }
  ]);
  return (
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <form className="todo-list">
        <ul>
          {todos.map((todo, i) => (
            <div className="todo">
              <div className="checkbox" />
              <input type="text" value={todo.content} />
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
