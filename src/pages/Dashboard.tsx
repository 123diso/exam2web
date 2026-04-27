import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { InitialCard } from "../Component/Card";

export const Dashboard = () => {

    const {dataList}= useContext(DataContext)

    const [filteredList,setFilteredList] = useState (dataList);

    return (<>
    <div>
        {filteredList.map((
    </div>
    
    
    </>)
}