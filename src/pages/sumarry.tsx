
import { useNavigate } from "react-router-dom";

export const sumary = () => {
    const navigate = useNavigate ();

    return (<>
    
        <button onClick={() => navigate ("/") } >
            ir a dashboar
        </button>

        
  

    </>
    )
}