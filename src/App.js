import React, { useState } from 'react';
import { Form } from './Form';  
import { Users } from './Users';
import { Hello } from './Hello';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const toggleComplete = (i) => {
    setTodos(todos.map((todo, k) => k === i ? {
      ...todo,
      complete: !todo.complete
    } : todo))
  }

  return (
    <main className="App">
      <h1>Todo List</h1>
      <Form onSubmit={text => setTodos([{text, complete: false}, ...todos])} />
      <ul>
        {todos.map(({ text, complete }, i) => (
            <li key={`${text}${i}`} onClick={() => toggleComplete(i)}
            style={{
              textDecoration: complete ? 'line-through' : ''
            }}>{text}</li>
        ))}
      </ul>
      <button onClick={() => setTodos([])}>reset</button>
    </main>
  );
}

export default App;
