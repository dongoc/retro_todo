import React, { useState, useEffect } from "react";
import sql from '../apis/sql';
import Header from "./Header";
import TodoList from "./TodoList";
import ResetBtn from "./ResetBtn";
import MenuBtn from "./MenuBtn";

const App =() => {
  const [todoItem, setTodoItem] = useState('');
  const [todoLists, setTodoLists] = useState([]);
  const [isOnNotStarted, setIsOnNotStarted] = useState(true);
  const [isOnInProgress, setIsOnInProgress] = useState(true);
  const [isOnCompleted, setIsOnCompleted] = useState(true);

  useEffect(() => {
    console.log('app', todoItem);
  }, [todoItem])

  const getTodoLists = async () => {
    const data = await sql.get('/todos');
    console.log(data);
    // setTodoLists(data);
  }

  const setTodo = () => {
    // sql.post('/todos', input)
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
      <ResetBtn />
      <MenuBtn />
    </div>
  );
};

export default App;