
export const ADD_ACTION = 'ADD_ACTION';
export const REMOVE_ACTION = 'REMOVE_ACTION';

export const addAction = (item) => ({
  type: ADD_ACTION,
  payload: item
});

export const removeAction = (index) => ({
  type: REMOVE_ACTION,
  payload: index
});
