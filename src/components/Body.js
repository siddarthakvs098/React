import ResturantCard from "../ResturantCard";
import resObj from "../../utils/mockData";

import { useState } from "react";
const Body = () =>{
    const [listOfRestuarant,setlistOfResturants]  = useState(
       resObj);
       console.log(listOfRestuarant);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter" onClick={
                    (params) => {
                        const filtered = resObj.filter(rest => rest.card.card.info.avgRating>4);
                        setlistOfResturants(listOfRestuarant.filter(rest => rest.card.card.info.avgRating>4));
                    }
                }>
                    filter
                </button>
            </div>
            <div className="res-container">

             { listOfRestuarant.map(rest => <ResturantCard key = {rest.card.card.info.id} resData = {rest} />)  }         
            </div>
        </div>
        
    );
}
export default Body;