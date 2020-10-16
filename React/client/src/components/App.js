import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from "./Header";
import TodoList from "./TodoList";

const App =() => {
  const [todoItem, setTodoItem] = useState('');
  const [todoLists, setTodoLists] = useState([]);
  const [isOnNotStarted, setIsOnNotStarted] = useState(true);
  const [isOnInProgress, setIsOnInProgress] = useState(true);
  const [isOnCompleted, setIsOnCompleted] = useState(true);

  useEffect(() => {
    getTodoLists();
  }, []);

  useEffect(() => {
    if (todoItem.length) {
      postTodo(todoItem);
    }
    // TODO : rerender
  }, [todoItem])

  const getTodoLists = async () => {
    const res = await axios.get('http://localhost:8080')
    setTodoLists(res.data);
  }

  const postTodo = async (todoItem) => {
    await axios.post('http://localhost:8080', {
      content: todoItem
    })
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
      <TodoList todoLists={todoLists}/>
      <button className="reset">
        <p>RESET</p>
      </button>
      <img className="category_img" src={require('../image/document.png')} alt="sort by category"></img>
    </div>
  );
};

export default App;