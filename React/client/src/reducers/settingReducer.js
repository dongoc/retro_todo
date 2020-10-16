import { SET_PROGRESS_STATUS } from '../actions/types';

const INITIAL_STATE = {
  not_started: true,
  in_progress: true, 
  complete: true
}

// FIXME
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PROGRESS_STATUS: 
      return {...state, }
    default: 
      return state;
  }
}

