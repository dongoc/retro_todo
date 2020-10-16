import React, {useState} from "react";

const Header =(props) => {
  const [todo, setTodo] = useState('');
  // QUESTION : 이렇게 일일히 상태관리를 해주어야 할까?
  // IDEA : const [filterBtnStatus, setFilterBtnStatus] = useState({not_started: true, in_progress: true, completed: true});

  return (
    <header>
      <div className="title_container">
        <div className="button_container">
          <button 
            onClick={() => {props.setIsOnNotStarted(!props.isOnNotStarted)}}
            className={`filterbtn not_started ${props.isOnNotStarted ? 'on' : 'off'}`}></button>
          <button 
            onClick={() => {props.setIsOnInProgress(!props.isOnInProgress)}}
            className={`filterbtn in_progress ${props.isOnInProgress ? 'on' : 'off'}`}></button>
          <button 
            onClick={() => {props.setIsOnCompleted(!props.isOnCompleted)}}
            className={`filterbtn completed ${props.isOnCompleted ? 'on' : 'off'}`}></button>
          <div></div>
        </div>
        <h1>TO DO LISTS</h1>
        <div></div>
      </div>
      <div className="input_container">
        <input 
          onChange={(e) => setTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' ? props.setTodoItem(todo) : null}
          type="text" placeholder="Add your todos..."/>
      </div>
    </header>
  );
};

export default Header;
