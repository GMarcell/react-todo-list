import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Typography from '@mui/material/Typography';

const LOCAL_STORAGE_KEY = "react-todo-list-todos"

function App() {
  const [todos, settodos] = useState([])

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      settodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    settodos([todo, ...todos])
  }

  function toggleComplete(id) {
    settodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    settodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <Typography variant='h2'>React Todo</Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo} />
    </div>
  );
}

export default App;
