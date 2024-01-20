import { useEffect, useState } from "react";
const useBody = ()=>{
    var restArray=[];
    const [listOfRestuarant,setlistOfResturants]  = useState([]);
    const [filteredRestuarant,setFilteredRestuarants] = useState([])
    useEffect(()=>{
        
        fetchData();
        
    },[]);
    
    const fetchData = async ()=>{
        //    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.332066&lng=78.5706985&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
            
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139391&lng=77.2090212&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

           const jsonValue = await data.json();

          
           restArray = jsonValue.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        
           setlistOfResturants(restArray);
           setFilteredRestuarants(restArray);
              
    }

    return { listOfRestuarant,filteredRestuarant,setFilteredRestuarants};
};

export default useBody;