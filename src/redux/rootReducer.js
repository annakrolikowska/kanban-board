import { combineReducers } from 'redux';
import taskReducer from './reducers/task.reducer';
import userReducer from './reducers/user.reducer';
import filterReducer from './reducers/filter.reducer';

const rootReducer = combineReducers({
    taskReducer: taskReducer,
    userReducer: userReducer,
    filterReducer: filterReducer,
});

export default rootReducer;