import filters from "../initState/filters";

const initialState = {
    filters: filters,
};

const filterReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'setPriority':
            const newPriorityFilters = {...state.filters};
            newPriorityFilters.priorityFilter = action.payload.priority;
            return {
                filters: newPriorityFilters
            }
        case 'setUser':
            const newUserFilters = {...state.filters};
            newUserFilters.userFilter = action.payload.user;
            return {
                filters: newUserFilters
            }
        default:
            return state;
    }
}

export default filterReducer