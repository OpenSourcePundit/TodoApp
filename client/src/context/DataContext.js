
import React, { createContext,useReducer,useState} from 'react'
import { dataReducer } from '../reducer/Reducer';

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const storedTasks = localStorage.getItem('tasks');
    const initialTasks = storedTasks? JSON.parse(storedTasks):[]
    const initialState ={
        tasks:initialTasks   
    }
    
    // to set active card for modal and for drag-drop functionality.
    const [activeCard,setActiveCard] = useState(null) 
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
