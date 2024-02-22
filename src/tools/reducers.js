// reducers.js
import { ADD_ACTION, REMOVE_ACTION } from './actions';

const initialState = {
  list: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACTION:
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    case REMOVE_ACTION:
      return {
        ...state,
        list: state.list.filter((_, i) => i !== action.payload)
      };
    default:
      return state;
  }
};

export default todoReducer;
