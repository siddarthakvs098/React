import { useState } from "react";
import UserClass from "./UserClass";
const User = (props)=>{
    const [count] = useState(10);
    const [count2] = useState(1);
    const {name} = props;
    return (
        <div className="user-card">
            <h1>Name:{name}</h1>
           
            
           
        </div>
    );
};
export default User;