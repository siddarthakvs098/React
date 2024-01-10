import ResturantCard,{withPromotionLabel} from "../ResturantCard";
import resObj from "../../utils/mockData";
import Shimmer from "./Shimmer";
import useBody from "../../utils/useBody";
import { Link } from "react-router-dom";
import { useState } from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Body = () =>{
    const onlineStatus = useOnlineStatus();
    const RestuarantCardPromoted = withPromotionLabel(ResturantCard)
    if(onlineStatus==false){
        console.log("heyyyy");
        return <h1>Oops, looks like you are offline </h1>;
    }
    
    
    const {listOfRestuarant,filteredRestuarant,setFilteredRestuarants} = useBody();
    const [searchText,setSearchText] = useState("");
    

   
    
    
    return listOfRestuarant.length === 0? <Shimmer/>  : (
        <div className="body">
            <div className="flex">
                <div className="search m-4 p-4 ">
                    <input type="text" className=" border border-solid border-black " value={searchText} onChange={
                        (e)=>{
                            setSearchText(e.target.value);
                        }
                     } />
                    <button className="px-4 py-2 m-4 rounded-lg bg-green-100" onClick={
                        (e,restArray)=>{
                            
                            
                            const filtered = listOfRestuarant.filter((rest)=>(rest.info.name.toLowerCase().includes(searchText.toLowerCase())  ));
                            setFilteredRestuarants(filtered);
                             
                        }
                    }>search</button>

                    <button className="m-4 bg-gray-100 px-4 py-2   rounded-lg " onClick={
                                        (params) => {
                                        
                                            setFilteredRestuarants(listOfRestuarant.filter(rest => rest.info.avgRating>=4));
                                        }
                                    }>
                                        top rated restuarants
                                    </button>
                    </div>
                    
                
                
                
            </div>
            
                <div className="flex flex-wrap">
                
                {/* <Link key = {rest.info.id} to = {"/restuarant/" + rest.info.id }> <ResturantCard  resData = {rest} /> </Link> ) */}
                   { filteredRestuarant.map((rest) => <Link key = {rest.info.id} to = {"/restuarant/" + rest.info.id }>
                    
                    {<  ResturantCard resData = {rest} />}
                     
                     
                      </Link> )}       
                </div>
        </div>
    );
}
export default Body;