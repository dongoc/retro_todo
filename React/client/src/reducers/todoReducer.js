import _ from "lodash";
import {
  POST_TODO,
  EDIT_TODO,
  EDIT_PROGRESS,
  DELETE_TODO,
  RESET_TODOS,
  FETCH_TODOS,
} from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case POST_TODO:
      return {...state, [action.payload.id]: action.payload};
    case EDIT_TODO: 
      return {...state, [action.payload.id]: action.payload};
    case EDIT_PROGRESS: 
      return {...state, [action.payload.id]: action.payload};
    case DELETE_TODO: 
      return _.omit(state, action.payload);
    case RESET_TODOS: 
    // FIXME
      return _.omit(state, action.payload);
    case FETCH_TODOS: 
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
}
