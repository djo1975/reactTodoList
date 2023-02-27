import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todolist from './Todolist';
import Header from './Header';
import Footer from './Footer';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []);

  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos((prevTodos) => [...prevTodos, { id: uuidv4(), name, complete: false }]);
    todoNameRef.current.value = '';
  };

  const handleClearTodos = () => {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  };

  return (
    <>
      <Header />
      <Todolist todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button type="button" onClick={handleAddTodo}>Add Todo</button>
      <button type="button" onClick={handleClearTodos}>Clear Completed</button>
      <div className="dr">
        {todos.filter((todo) => !todo.complete).length}
        {' '}
        left to do
      </div>
      <Footer />
    </>
  );
}

export default App;
