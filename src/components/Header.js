import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
 const Header  = ()=>{
    const [btnName,setBtnName] = useState("login");
    const onlineStatus = useOnlineStatus();
    return (
        
    <div className="flex justify-between ">
        <div className="logo-container">
            <img className=" w-28  " src={LOGO_URL} alt="logo.png" />
        </div>
            <div className="flex items-center ">
                <ul className="flex p-4 m-4" >
                    <li className="px-4 hover:text-gray-900">Status:{ (onlineStatus == true)? "✅" : "🔴" }</li>
                    <li className="px-4  hover:text-gray-200 "> <Link to="/"> Home </Link> </li>
                    <li className="px-4 hover:text-gray-200"> <Link to="/about" > About us </Link> </li>
                    <li className="px-4 hover:text-gray-200"> <Link to ="/contact" > Contact us  </Link>  </li>
                    <li className="px-4 hover:text-gray-200">  <Link to="/grocery" >Grocery</Link></li>
                    <li className="px-4 hover:text-gray-200">Cart</li>
                    <li className="px-4 hover:text-gray-200">
                    <button className="" onClick={
                        ()=>{
                            btnName=="login" ? setBtnName("logout"):setBtnName("login");
                        }
                    } >{btnName}</button>
                    </li>
                    
                </ul>
            </div>
            
            
        </div>
       
    );
};

export default Header;