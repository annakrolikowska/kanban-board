import tasks from "../initState/tasks";

export const loadTasks=()=> {
    try {
        const serializedTasks = localStorage.getItem("tasks");
        if (serializedTasks === null) {
          return [];
        }
        return JSON.parse(serializedTasks); 
    } catch (error) {
        console.error('Error loading tasks from localStorage:', error);
        return [];
    }    
}

export const saveTasksToLocalStorage = (tasks) => {
    try {
        const serializedTasks = JSON.stringify(tasks); 
        localStorage.setItem("tasks", serializedTasks); 
    } catch (error) {
        console.error('Error saving tasks to localStorage:', error);
    }
};    

export const addTask=({task})=> {
    const tasks = loadTasks(); 
        task.id = tasks.length + 1;
        saveTasksToLocalStorage([...tasks,task])
}

export const removeTask = (taskId) => {
        const tasks = loadTasks();
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        saveTasksToLocalStorage(updatedTasks);
};

export const moveTask =({taskId,columnId})=> {
    const tasks = loadTasks();

    const filteredTasks = tasks.filter(task => task.id !== taskId); 
    const updatedTask = tasks.find(task => task.id === taskId); 
    updatedTask.columnId = columnId; 
    saveTasksToLocalStorage([...filteredTasks, updatedTask])
}

export const initializeLocalStorage = () => {
    const defaultTasks = tasks

    if (!localStorage.getItem('tasks')) {
        localStorage.setItem('tasks', JSON.stringify(defaultTasks));
    }

    return loadTasks()
};

