import React, { useState, useEffect } from "react";
import sql from '../apis/sql';
import Header from "./Header";
import TodoList from "./TodoList";

const App =() => {
  const [todoItem, setTodoItem] = useState('');
  const [todoLists, setTodoLists] = useState([]);
  const [isOnNotStarted, setIsOnNotStarted] = useState(true);
  const [isOnInProgress, setIsOnInProgress] = useState(true);
  const [isOnCompleted, setIsOnCompleted] = useState(true);

  useEffect(() => {
    console.log('app', todoItem);
    // getTodoLists();
  }, [todoItem])

  const getTodoLists = async () => {
    const data = await sql.get('/todos');
    console.log(data);
    // TODO : setTodoLists(data);
  }

  const setTodo = () => {
    // TODO : sql.post('/todos', input)
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