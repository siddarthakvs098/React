import ResturantCard from "../ResturantCard";
import resObj from "../../utils/mockData";
import Shimmer from "./Shimmer";
import useBody from "../../utils/useBody";
import { Link } from "react-router-dom";
import { useState } from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Body = () =>{
    const onlineStatus = useOnlineStatus();
 
    if(onlineStatus==false){
        console.log("heyyyy");
        return <h1>Oops, looks like you are offline </h1>;
    }
    
    
    const {listOfRestuarant,filteredRestuarant} = useBody();
    const [searchText,setSearchText] = useState("");
    

   
    
    
    return listOfRestuarant.length === 0? <Shimmer/>  : (
        <div className="body">
            <div className="filter">
                    <div className="search">
                    <input type="text" className="textbox" value={searchText} onChange={
                        (e)=>{
                            setSearchText(e.target.value);
                        }
                     } />
                    <button className="search" onClick={
                        (e,restArray)=>{
                            
                            
                            const filtered = listOfRestuarant.filter((rest)=>(rest.info.name.toLowerCase().includes(searchText.toLowerCase())  ));
                            setFilteredRestuarants(filtered);
                             
                        }
                    }>search</button>
                    </div>
                    
                
                <button className="filter" onClick={
                    (params) => {
                       
                        setFilteredRestuarants(listOfRestuarant.filter(rest => rest.info.avgRating>=4));
                    }
                }>
                    filter
                </button>
                
            </div>
            
                <div className="res-container">
                
                {/* <Link key = {rest.info.id} to = {"/restuarant/" + rest.info.id }> <ResturantCard  resData = {rest} /> </Link> ) */}
                   { filteredRestuarant.map((rest) => <Link key = {rest.info.id} to = {"/restuarant/" + rest.info.id }> <ResturantCard  resData = {rest} /> </Link> )}       
                </div>
        </div>
    );
}
export default Body;