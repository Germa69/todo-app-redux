import { ADD_TODO_ACTION, TOGGLE_TODO_STATUS } from "../../redux/constants";

const initState = [
  {
    id: 1,
    name: "Learn Yoga",
    completed: false,
    priority: "Medium",
  },
  {
    id: 2,
    name: "Learn PHP",
    completed: true,
    priority: "High",
  },
  {
    id: 3,
    name: "Learn Laravel",
    completed: false,
    priority: "Low",
  },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [...state, action.payload];
    case TOGGLE_TODO_STATUS:
      // map() trả về 1 array mới
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default todoListReducer;
