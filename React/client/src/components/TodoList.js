import React from "react";
import TodoListEntry from "./TodoListEntry";
// 1. 폴님 : setTodoItem을 해준다
// 2. 시영님 : root에 todolistEntry를 prepand 
// new Date()
// input -> post -> todolists -> map 
const TodoList = (props) => {

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


