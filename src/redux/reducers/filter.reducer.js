import filters from "../initState/filters";

const initialState = {
    filters: filters,
};

const filterReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'setPriority':
            const newFilters = {...state.filters};
            newFilters.priorityFilter = action.payload.priority;
            return {
                filters: newFilters
            }
        default:
            return state;
    }
}

export default filterReducer