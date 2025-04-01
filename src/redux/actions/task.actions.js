export const loadTasksAction = (tasks) => ({
  type: "loadTasks",
  payload: { tasks },
});

export const addTaskAction = (task) => ({
  type: "addTask",
  payload: { task },
});

export const moveTaskAction = (taskId, columnId) => ({
  type: "moveTask",
  payload: { taskId, columnId },
});

export const deleteTaskAction = (id) => ({
  type: "deleteTask",
  payload: { id },
});
