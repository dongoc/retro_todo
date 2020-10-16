import React, {useState, useEffect} from "react";
import axios from 'axios';

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
    // console.log('before', progressStatus)
    // console.log('next', NEXT_STATUS[progressStatus])
    setProgressStatus(NEXT_STATUS[progressStatus]);
    // QUESTION : 바로 setProgressStatus가 반영이 되지 않는 이유?
    // console.log('after', progressStatus);
    // patchProgressStatus();
  }

  useEffect(() => {
    patchProgressStatus();
  }, [progressStatus])

  const patchProgressStatus = async () => {
    await axios.patch('http://localhost:8080', {
      id: todo.id,
      progress: progressStatus
    })
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
        <div className="createdDate">{todo.created_at}</div>
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
