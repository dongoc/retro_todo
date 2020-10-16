import React from "react";
import TodoListEntry from "./TodoListEntry";

const TodoList =({todoLists}) => {

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


