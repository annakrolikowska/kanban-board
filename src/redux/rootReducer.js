import { combineReducers } from 'redux';
import taskReducer from './reducers/task.reducer';
import userReducer from './reducers/user.reducer';

const rootReducer = combineReducers({
    taskReducer: taskReducer,
    userReducer: userReducer,
});

export default rootReducer;