import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { InitialCard } from "../Component/Card";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {

    const {dataList}= useContext(DataContext)

    const navigate = useNavigate ();

    const [filteredList,setFilteredList] = useState (dataList);

    return <>
    
    <button onClick={() => navigate("/summary")

    }>


    </button>

      { filteredList.map(( card) =>
        <InitialCard key={card.id} card = {card}
        
        />
      ) }
      
      
    
    
    </>
}