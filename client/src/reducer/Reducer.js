export const dataReducer = (state, { type, payload }) => {
    const { status } = payload
    switch (type) {
        case "ADD_TASK":
            let updatedArray;
            const { id, title, description } = payload;
            const newObj = { id, title, description, status};
            updatedArray = [...state.tasks, newObj];
                    return { ...state, tasks: updatedArray };
           
            
        case "TRANSFER_CARD":
            const { dropPosition, activeCard } = payload;
            const activeCardIndex = state.tasks.indexOf(activeCard)
            const updatedTasks = state.tasks.filter((task, index) =>
                index !== activeCardIndex)
            updatedTasks.splice(dropPosition, 0, {...activeCard, status: status })
            console.log(updatedTasks)


            return { ...state, tasks: updatedTasks };




        case "SET_LOCATION":

            return { ...state, lat: payload.lat, lon: payload.lon, location: payload.location }

        case "fetch_wishlist":
            return { ...state, wishlist: [...payload], wishlistLength: payload.length }

        case "SET_LOADING":
            return { ...state, status: "loading" }


        default:
            return state;
    }

}
