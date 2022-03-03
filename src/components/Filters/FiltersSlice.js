import {
  SEARCH_FILTER_CHANGE,
  STATUS_FILTER_CHANGE,
  STATUS_PRIORITIES_CHANGE,
} from "../../redux/constants";

const initState = {
  search: "",
  status: "All",
  priorities: [],
};

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case SEARCH_FILTER_CHANGE:
      return {
        ...state, // Copy lại state cũ
        search: action.payload, // Override lại
      };
    case STATUS_FILTER_CHANGE:
      return {
        ...state,
        status: action.payload,
      };
    case STATUS_PRIORITIES_CHANGE:
      return {
        ...state,
		priorities: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;

