import {
  loadTasks,
  moveTask,
  initializeLocalStorage,
  addTask,
  removeTask,
} from "../api/TaskApi";

const initialState = {
  tasks: initializeLocalStorage(),
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "loadTasks":
      return {
        tasks: loadTasks(),
      };
    case "moveTask":
      moveTask(action.payload);
      return {
        tasks: loadTasks(),
      };
    case "addTask":
      addTask(action.payload);
      return {
        tasks: loadTasks(),
      };
    case "deleteTask":
      removeTask(action.payload.id);
      return {
        tasks: loadTasks(),
      };
    default:
      return state;
  }
};

export default taskReducer;
