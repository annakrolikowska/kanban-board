import { v4 as uuidv4 } from "uuid";
import tasks from "../initState/tasks";

const TASKS_KEY = "tasks";

export const loadTasks = () => {
  try {
    const serializedTasks = localStorage.getItem(TASKS_KEY);
    if (serializedTasks === null) {
      return [];
    }
    return JSON.parse(serializedTasks);
  } catch (error) {
    console.error("Error loading tasks from localStorage:", error);
    throw error;
  }
};

export const saveTasksToLocalStorage = (tasks) => {
  try {
    const serializedTasks = JSON.stringify(tasks);
    localStorage.setItem(TASKS_KEY, serializedTasks);
  } catch (error) {
    console.error("Error saving tasks to localStorage:", error);
  }
};

export const addTask = ({ task }) => {
  const tasks = loadTasks();
  task.id = uuidv4();
  saveTasksToLocalStorage([...tasks, task]);
};

export const removeTask = (taskId) => {
  const tasks = loadTasks();
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  saveTasksToLocalStorage(updatedTasks);
};

export const moveTask = ({ taskId, columnId }) => {
  const tasks = loadTasks();

  const updatedTasks = tasks.map((task) => {
    if (task.id === taskId) {
      return { ...task, columnId };
    }
    return task;
  });

  saveTasksToLocalStorage(updatedTasks);
};

export const initializeLocalStorage = () => {
  const defaultTasks = tasks;

  if (!localStorage.getItem(TASKS_KEY)) {
    localStorage.setItem(TASKS_KEY, JSON.stringify(defaultTasks));
  }

  return loadTasks();
};
