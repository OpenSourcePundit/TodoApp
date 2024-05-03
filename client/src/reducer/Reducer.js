import { v4 as uuidv4 } from 'uuid';
export const dataReducer = (state, { type, payload }) => {
    const { status } = payload
    switch (type) {
        case "ADD_TASK":
            let updatedArray;
            const { title, description } = payload;
            const newObj = { id:uuidv4(), title, description, status};
            updatedArray = [...state.tasks, newObj];
                    return { ...state, tasks: updatedArray };
           
            
        case "TRANSFER_CARD":
            const { dropPosition, activeCard } = payload;
            const activeCardIndex = state.tasks.indexOf(activeCard)
            const updatedTasks = state.tasks.filter((task, index) =>
                index !== activeCardIndex)
            updatedTasks.splice(dropPosition, 0, {...activeCard, status: status })


            return { ...state, tasks: updatedTasks };

        case "DELETE_TASK":
                const {id} = payload;
                const updatedTasks1 = state.tasks.filter((task, index) =>
                    id !== task.id)                
    
    
                return { ...state, tasks: updatedTasks1 };



        default:
            return state;
    }

}
