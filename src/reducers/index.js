import {loadTasks,moveTask,initializeLocalStorage, addTask, removeTask} from '../KanbanProvider'

const initialState = {
    tasks:  initializeLocalStorage(),
  };

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'loadTasks':
            console.log("load tasks")
            return {
                tasks: loadTasks()
            }
        case 'moveTask':
            moveTask(action.payload)
            return {
                tasks: loadTasks()
            }        
        case 'addTask':
            addTask(action.payload)
            return {
                tasks: loadTasks()
            } 
        case 'deleteTask':
            removeTask(action.payload.id)
            return {
                tasks: loadTasks()
        }
        default:
            return state;
    } 
}

export default reducer