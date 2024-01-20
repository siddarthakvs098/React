

import { useParams } from "react-router-dom";
import useRestuarantMenu from "../../utils/useRestuarantMenu";

import Shimmer from "./Shimmer";
import RestuarantCategory from "./RestuarantCategory";
import { useState } from "react";
const RestuarantMenu = ()=>{
    const [showIndex , setShowIndex]  = useState(null);
    var {resid} = useParams();
    const resValue =  useRestuarantMenu(resid)  
    
    if(resValue === null){
        return <Shimmer/>
    }
    
    const {name,cuisines,costForTwoMessage} = resValue?.data?.cards[0]?.card?.card?.info;
    const ItemCards = (resValue?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards ) ||  (resValue?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0].itemCards) ;
    // console.log(resValue);
    // console.log("________________________")
    // console.log(resValue?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    // console.log(resValue?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2])
    const listItems = resValue.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((rest)=>(rest.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ));
    


    
    // console.log(resValue?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR)
    return (
        <div className="text-center">
            
            <h1 className=" my-6 font-bold text-2xl">{name}</h1>
            <p className=" font-bold text-lg p-4">{cuisines.join(",")} -{costForTwoMessage} </p>
            <ul>
                
                { listItems.map((rest,index) => <RestuarantCategory key={index} data = {rest.card.card} showItems={index === showIndex && true } setShowIndex ={  () =>{ return setShowIndex(index) }} /> ) }
            </ul>

           
          
        </div>

        );
}

export default RestuarantMenu;