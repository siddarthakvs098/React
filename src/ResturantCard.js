import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const ResturantCard = (props)=>{
    const {resData} = props;
    const { loggedInUser } = useContext(UserContext);
    // console.log(resData?.card?.card?.info);
    const {cloudinaryImageId,name,cuisines,avgRating,sla,} = resData?.info;
    
    // console.log(resData.card.card.info);
    
    // const {deliveryTime} = resName.card.card.info.sla;
    
    // console.log(resName.card.card.info);
    return (
        
        <div className=" m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200 " >
            <img className=" w-[200px] h-[200]  rounded-lg " src={CDN_URL+cloudinaryImageId} alt="img"  /> 
            <h3 className=" font-bold py-4 text-lg " >{name}</h3>
             <h4 className=" overflow-hidden ">{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
            <h4>User : {loggedInUser} </h4>
        </div>
    );
}

export const withPromotionLabel = (ResturantCard)=>{

    return ( props)=>{
        return (
            <div>
                    <label className=" absolute p-2 m-2 bg-black text-white rounded-lg" >Promoted</label>
                    <ResturantCard {...props} />
            </div>
            
        );
    }
}

export default ResturantCard;