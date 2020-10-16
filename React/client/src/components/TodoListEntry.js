import React, {useState} from "react";

const TodoListEntry = ({todo}) => {
  const [currentInput, setCurrentInput] = useState(todo.content);
  const [isEdit, setIsEdit] = useState(false);
  const [progressStatus, setProgressStatus] = useState(todo.progress);

  const onProgressBtnClick = () => {
    const NEXT_STATUS = {
      not_started: 'in_progress',
      in_progress: 'completed',
      completed: 'not_started'
    }
    setProgressStatus(NEXT_STATUS[progressStatus]);
    // TODO : patch
  }

  const renderItemOrInput = () => {
    return (!isEdit 
      ? <div className="todos">{currentInput}</div>
      : <input 
          className="edit_input" 
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' ? onSubmitInput() : null}
          type="text"/>
    )
  }

  const onEditBtnClick = () => {
    if (!isEdit) {
      setIsEdit(!isEdit)
    } else {
      onSubmitInput(currentInput)
    }
  }

  const onSubmitInput = () => {
    setIsEdit(!isEdit);
    // TODO : patch
  }

  const onDeleteBtnClick = () => {
    // TODO : DELETE
  }

  return (
    <li>
      <div className="progressBtn_container">
        <button 
          className={`progress_button ${progressStatus}`}
          onClick={() => onProgressBtnClick()}
        >
        </button>
      </div>
      <div className="content_container">
        {renderItemOrInput()}
        <hr />
        <div className="createdDate">{todo.createdAt}</div>
      </div>
      <div className="edit_container">
        <button 
          className="listBtn editBtn"
          onClick={() => onEditBtnClick()}
          ></button>
        <button 
          className="listBtn deleteBtn"
          onClick={() => onDeleteBtnClick()}
        ></button>
      </div>
    </li>
  );
};

export default TodoListEntry;


// // <div class="list_container">
// //       <ul>
// //       <li id="0"><div class="progressBtn_container">
// // <button class="progress_button not_started"></button>
// // </div><
// // div class="content_container"><div class="todos">todo</div><hr><div class="createdDate">2020.10.16 Fri</div><
// // /><div class="edit_container">
// <button class="listBtn editBtn"></button>
// <butprintfirstmessegeton class="listBtn deleteBtn"></butprintfirstmessegeton></div></li></ul>
// //       <div id="noList" style="display: none;">Add your todos :)</div>
// //     </div>