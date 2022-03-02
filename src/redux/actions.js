import {
  ADD_TODO_ACTION,
  SEARCH_FILTER_CHANGE,
  STATUS_FILTER_CHANGE,
  STATUS_PRIORITIES_CHANGE,
  TOGGLE_TODO_STATUS
} from "./constants";

export const addTodo = (data) => {
  return {
    type: ADD_TODO_ACTION,
    payload: data,
  };
};

export const toggleTodoStatus = (todoId) => {
  return {
    type: TOGGLE_TODO_STATUS,
	payload: todoId,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: SEARCH_FILTER_CHANGE,
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: STATUS_FILTER_CHANGE,
    payload: status,
  };
};

export const priorityFilterChange = (priorities) => {
  return {
    type: STATUS_PRIORITIES_CHANGE,
    payload: priorities,
  };
};

// Action creators => Function
