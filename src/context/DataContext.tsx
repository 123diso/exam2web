import { IniciaData } from "../data/data";
import { createContext, useState } from "react";

export const DataContext = createContext(null);

export const IncidentsProvider = ({ children }) => {

    const[DataList, setDataList] = useState(IniciaData)

    return (
        <>
        <DataContext.Provider value={{DataList,setDataList}}>
        
        
        {children}
        
        </DataContext.Provider>
        
        
        </>


    )
}