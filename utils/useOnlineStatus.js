import { useState,useEffect } from "react";
const useOnlineStatus = ()=>{
    const [onlineStatus,setOnlineStatus] = useState(null);
    
    useEffect(()=>{
     
        
        window.addEventListener("online", (event) => {
            
            setOnlineStatus(true);
        });
        window.addEventListener("offline", (event) => {
            console.log("The network connection has been lost.");
          });    
          
          
    },[])
    
    return onlineStatus;
}
export default useOnlineStatus;
