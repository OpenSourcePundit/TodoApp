export const dataReducer = (state, { type, payload }) => {

    switch (type) {
        case "ADD_TASK":
            let updatedArray;
            const { id, title, description, status } = action.payload;
            const newObj = { id, title, description };
            switch (status) {
                case 'To Do':
                    updatedArray = [...state.todo, newObj];
                    return { ...state, todo: updatedArray };
                case 'Doing':
                    updatedArray = [...state.doing, newObj];
                    return { ...state, doing: updatedArray };
                case 'Done':
                    updatedArray = [...state.done, newObj];
                    return { ...state, done: updatedArray };
                    default:
            return state;
            }
        


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