
import React, { createContext,useReducer,useState} from 'react'
import { dataReducer } from '../reducer/Reducer';

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const initialState ={
        tasks:[{ id: 1, title: 'Task 1', description: 'Description for Task 1', status:"To Do" },
        { id: 2, title: 'Task 2', description: 'Description for Task 2', status:"To Do" },{ id: 3, title: 'Task 3', description: 'Description for Task 3', status:"Doing" },{ id: 4, title: 'Task 4', description: 'Description for Task 4', status:"Done" },]    
    }
    const [activeCard,setActiveCard] = useState(null) // to set active card for modal and for drag-drop functionality.

    const handleDrop = (status,dropPosition) => {
      if (activeCard===null || activeCard===undefined)return;
      dispatch({ type: "TRANSFER_CARD", payload: { status,dropPosition,activeCard } });
  };


    const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{
      tasks:state.tasks,
      dispatch,handleDrop,activeCard,setActiveCard
    }}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider
