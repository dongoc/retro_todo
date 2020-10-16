import React from "react";
import TodoListEntry from "./TodoListEntry";

const TodoList =(props) => {

  const renderTodoLists = () => {
    return props.todoLists.map((todo) => {
      return (
        <TodoListEntry 
          key={todo.id} 
          todo={todo}
          isOnNotStarted={props.isOnNotStarted}
          isOnInProgress={props.isOnInProgress}
          isOnCompleted={props.isOnCompleted}
        />)
    })
  }

  return (
    <div className="list_container">
      { !props.todoLists.length 
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


