

import { useParams } from "react-router-dom";
import useRestuarantMenu from "../../utils/useRestuarantMenu";

import Shimmer from "./Shimmer";

const RestuarantMenu = ()=>{
    
    var {resid} = useParams();
    const resValue =  useRestuarantMenu(resid)   
    if(resValue === null){
        return <Shimmer/>
    }
    
    const {name,cuisines} = resValue?.data?.cards[0]?.card?.card?.info;
    const ItemCards = (resValue?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards ) ||  (resValue?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0].itemCards) ;
    console.log(resValue)
    return (
        <div className="restuarantMenu">
            
            <h1>{name}</h1>
            <p>{cuisines.join(",")}</p>
            <h2>Menu </h2>
            <ul>
                { ItemCards.map((rest) => <li key ={rest.card.info.id}  >{rest.card.info.name} </li>  ) }
            </ul>

           
          
        </div>

        );
}

export default RestuarantMenu;