import teamMembers from "./teamMembers";

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
    if (window.confirm("Are you sure to remove the task?")) {
        const tasks = loadTasks();
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        saveTasksToLocalStorage(updatedTasks);
    }
};

export const moveTask =({taskId,columnId})=> {
    const tasks = loadTasks();

    const filteredTasks = tasks.filter(task => task.id !== taskId); 
    const updatedTask = tasks.find(task => task.id === taskId); 
    updatedTask.columnId = columnId; 
    saveTasksToLocalStorage([...filteredTasks, updatedTask])
}

export const initializeLocalStorage = () => {
    const defaultTasks = [
        {id:1,columnId:1, title:'Create a landingpage', description:'The landing page looks great both on desktop and mobile devices', member: teamMembers[2].name, avatar: teamMembers[2].avatar, priority:'High'},
        {id:2,columnId:2, title:'Write a post', description:'Plan your blog post by choosing a topic, creating an outline, conducting research.', member: teamMembers[5].name, avatar: teamMembers[5].avatar, priority:'Medium'},
        {id:3,columnId:3, title:'Email newsletter', description:'An email newsletter is an email that businesses send out to a list of newsletter subscribers.', member: teamMembers[1].name, avatar: teamMembers[1].avatar, priority:'High'},
        {id:4,columnId:4, title:'Call with clients', description:'Call with a customer from Warsaw', member: teamMembers[0].name, avatar: teamMembers[0].avatar, priority:'Low'},
    ];

    if (!localStorage.getItem('tasks')) {
        localStorage.setItem('tasks', JSON.stringify(defaultTasks));
    }

    return loadTasks()
};

