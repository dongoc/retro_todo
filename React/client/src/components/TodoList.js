import React from "react";
import TodoListEntry from "./TodoListEntry";

const TodoList =({/*todoLists*/}) => {
  const todoLists = [
    {
      id: 1,
      progress: 'not_started',
      content: '열심히 하자',
      createdAt: '2020.10.16 Fri'
    },
    {
      id: 2,
      progress: 'completed',
      content: '하지만 어려워',
      createdAt: '2020.10.16 Fri'
    },
  ]
  const renderTodoLists = () => {
    return todoLists.map((todo) => {
      return <TodoListEntry key={todo.id} todo={todo}/>
    })
  }

  return (
    <div className="list_container">
      { !todoLists.length 
        ? (
            <div className="noList">{`Add your todos :)`}</div>
      ) : (
            <ul>
              {renderTodoLists()}
            </ul>
          )
      }
    </div>
  );
};

export default TodoList;


