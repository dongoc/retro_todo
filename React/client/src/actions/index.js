import axios from 'axios';

import {
  POST_TODO,
  EDIT_TODO,
  EDIT_PROGRESS,
  DELETE_TODO,
  RESET_TODOS,
  FETCH_TODOS,
  SET_PROGRESS_STATUS,
} from './types';

export const postTodo = (todoItem) => async (dispatch) => {
  const res = await axios.post('http://localhost:8080', {
      content: todoItem
    });
  // FIXME : res.data?
  dispatch({type: POST_TODO, payload: res.data})
};

export const editTodo = (id, content) => async (dispatch) => {
  const res = await axios.patch('http://localhost:8080', {
      id, content
  });
  // FIXME : res.data?
  dispatch({type: EDIT_TODO, payload: res.data});
}

export const editProgress = (id, progress) => async (dispatch) => {
  const res = await axios.patch('http://localhost:8080', {
    id, progress
  });
  dispatch({type: EDIT_PROGRESS, payload: res.data});
}

export const deleteTodo = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:8080/delete/${id}`);
  dispatch({type: DELETE_TODO, payload: id})
}

export const resetTodos = () => async (dispatch) => {
  await axios.delete('http://localhost:8080/reset');
  dispatch({type: RESET_TODOS});
}

export const fetchTodos = () => async (dispatch) => {
  const res = await axios.get('http://localhost:8080');
  dispatch({type:FETCH_TODOS, payload: res.data})
}

// FIXME : progress 따로 떨어트리기
export const setProgressStatus = (progressStatus) => {
  return {
    type: SET_PROGRESS_STATUS,
    payload: progressStatus
  };
};