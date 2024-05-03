import { v4 as uuidv4 } from 'uuid';
export const dataReducer = (state, { type, payload }) => {
    const { status } = payload
    switch (type) {
        case "ADD_TASK":
            let updatedArray;
            const { title, description } = payload;
            const newObj = { id:uuidv4(), title, description, status};
            updatedArray = [...state.tasks, newObj];
            localStorage.setItem('tasks', JSON.stringify(updatedArray));
                    return { ...state, tasks: updatedArray };
           
            
        case "TRANSFER_CARD":
            const { dropPosition, activeCard } = payload;
            const activeCardIndex = state.tasks.indexOf(activeCard)
            const updatedTasks = state.tasks.filter((task, index) =>
                index !== activeCardIndex)
            updatedTasks.splice(dropPosition, 0, {...activeCard, status: status })
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return { ...state, tasks: updatedTasks };

        case "DELETE_TASK":
                const {id} = payload;
                const updatedTasks1 = state.tasks.filter((task, index) =>
                    id !== task.id)          
    
                    localStorage.setItem('tasks', JSON.stringify(updatedTasks1));
                return { ...state, tasks: updatedTasks1 };



        default:
            return state;
    }

}
