import { useEffect,useState } from "react";
const useRestuarantMenu = (resid)=>{
    const [resValue, setResValue] = useState(null);
    useEffect(()=>{
        fetchData();
    },[]);
 // 26719 , 253718
 const fetchData = async ()=>{
    
    const data = await fetch( "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6139391&lng=77.2090212&restaurantId="+resid  );
    const jsonValue = await data.json(); 
   
    setResValue(jsonValue);
    // console.log(jsonValue);
    
}

    return resValue;
};
export default useRestuarantMenu;