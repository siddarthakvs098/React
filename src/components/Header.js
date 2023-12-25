import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
 const Header  = ()=>{
    const [btnName,setBtnName] = useState("login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
            <img src={LOGO_URL}
             alt="logo.png" className="logo" />
            </div>
            <div className="nav-items">
                <ul  >
                    <li>Status:{ (onlineStatus == true)? "✅" : "🔴" }</li>
                    <li > <Link to="/"> Home </Link> </li>
                    <li > <Link to="/about" > About us </Link> </li>
                    <li > <Link to ="/contact" > Contact us  </Link>  </li>
                    <li><Link to="/grocery" >Grocery</Link></li>
                    <li >Cart</li>
                    <li>
                    <button className="login" onClick={
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