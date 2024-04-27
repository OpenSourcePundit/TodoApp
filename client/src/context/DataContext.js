
import React, { createContext,useReducer} from 'react'
import { dataReducer } from '../reducer/Reducer';

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const initialState ={
        toDo:[{ id: 1, title: 'Task 1', description: 'Description for Task 1' },
        { id: 2, title: 'Task 2', description: 'Description for Task 2' },],
        doing:[ { id: 3, title: 'Task 3', description: 'Description for Task 3' },],
        done:[ { id: 4, title: 'Task 4', description: 'Description for Task 4' },],
        

    
    }
    const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{state}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider
