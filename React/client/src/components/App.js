import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from "./Header";
import TodoList from "./TodoList";

const App = () => {
  const [todoItem, setTodoItem] = useState('');
  const [todoLists, setTodoLists] = useState([]);
  const [isOnNotStarted, setIsOnNotStarted] = useState(true);
  const [isOnInProgress, setIsOnInProgress] = useState(true);
  const [isOnCompleted, setIsOnCompleted] = useState(true);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    getTodoLists();
  }, []);

  useEffect(() => {
    if (todoItem.length) {
      postTodo(todoItem);
    }
  }, [todoItem])

  useEffect(() => {
    getTodoLists();
  }, [todoLists])

  const getTodoLists = async () => {
    const res = await axios.get('http://localhost:8080')
    setTodoLists(res.data);
  }

  const postTodo = async (todoItem) => {
    await axios.post('http://localhost:8080', {
      content: todoItem
    })
  }

  const resetAllTodos = async () => {
    await axios.delete('http://localhost:8080/reset');
    setTodoLists([]);
  }

  return (
    <div className="container">
      <Header 
        setTodoItem={setTodoItem} 
        isOnNotStarted={isOnNotStarted} 
        setIsOnNotStarted={setIsOnNotStarted} 
        isOnInProgress={isOnInProgress} 
        setIsOnInProgress={setIsOnInProgress} 
        isOnCompleted={isOnCompleted} 
        setIsOnCompleted={setIsOnCompleted}
      />
      <TodoList 
        todoLists={todoLists}
        isOnNotStarted={isOnNotStarted} 
        isOnInProgress={isOnInProgress} 
        isOnCompleted={isOnCompleted} 
      />
      <button 
        className="reset"
        onClick={resetAllTodos}
      >
        <p>RESET</p>
      </button>
      <img className="category_img" src={require('../image/document.png')} alt="sort by category"></img>
    </div>
  );
};

export default App;