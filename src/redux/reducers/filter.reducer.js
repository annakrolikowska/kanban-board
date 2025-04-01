import filters from "../initState/filters";

const initialState = {
  filters: filters,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setPriority":
      return {
        filters: {
          ...state.filters,
          priorityFilter: action.payload.priority,
        },
      };
    case "setUser":
      return {
        filters: {
          ...state.filters,
          userFilter: action.payload.user,
        },
      };
    default:
      return state;
  }
};

export default filterReducer;
