import filters from "../initState/filters";

const initialState = {
    filters: filters,
};

const filterReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'setPriority':
            const newPriorityFilters = {...state.filters};
            newPriorityFilters.priorityFilter = action.payload.priority;
            console.log(newPriorityFilters)
            return {
                filters: newPriorityFilters
            }
        case 'setUser':
            const newUserFilters = {...state.filters};
            newUserFilters.userFilter = action.payload.user;
            console.log(newUserFilters)
            return {
                filters: newUserFilters
            }
        default:
            return state;
    }
}

export default filterReducer