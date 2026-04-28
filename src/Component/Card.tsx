

export const InitialCard = ({card}:any)=> {

        return(<>
        <div>
           <p> {card.id}</p>
           <p> {card.type}</p>
           <p> {card.capacity}</p>
           <p> {card.location}</p>
            <p> {card.pricePerHour}</p>
             <p> {card.available}</p>
        </div>
        
    
        
        </>)
}

