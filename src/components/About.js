import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About  extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor");
    };

    componentDidMount(){
        console.log("Parent componentDidMount")
    }

    render(){
        console.log("parent Render")
        return (
            <div className=" bg-red-50">
            <h1 className=" ">About</h1>
            <h2 className="">This is namaste react web series</h2>

            {/* <User name = {"Siddartha(Functional)"}  /> */}
            <UserClass name = {"First"} />
            <UserClass name = {"Second"} />
            <UserClass name = {"Third"} />
            </div>
        );
        
    }

    
}


// const About = ()=>{
//     return (
//         <div className="about">
//             <h1>About</h1>
//             <h2>This is namaste react web series</h2>

//             <User name = {"Siddartha(Functional)"}  />
//             <UserClass name = {"First"} />
//         </div>
//     );
// };
export default About;