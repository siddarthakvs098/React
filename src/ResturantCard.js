import { CDN_URL } from "../utils/constants";


const ResturantCard = (props)=>{
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,sla,} = resData.card.card.info;
    
    // console.log(resData.card.card.info);
    
    // const {deliveryTime} = resName.card.card.info.sla;
    
    // console.log(resName.card.card.info);
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img src={CDN_URL+cloudinaryImageId} alt="" className="res-img" /> 
            <h3>{name}</h3>
             <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.deliveryTime} minutes</h4>

        </div>
    );
}
export default ResturantCard;