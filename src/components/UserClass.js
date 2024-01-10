// import React from "react";
// class UserClass extends React.Component{
    
//     constructor (props) {
//         super(props); 
//         this.state = {
//             count : 10,
//             count2 :1,   
//         }  
//         console.log(this.props.name + "constructor ");
        
//     };
//     componentDidMount(){
//         console.log(this.props.name + "componentDidMount "); 
//     }
//     render(){
//         console.log(this.props.name + "render");
//         const {name} = this.props; 
//         const {count,count2 } = this.state;
//         return (
//             <div className="userClass-card">
//             <h1>Name:{name}</h1>
//             <h2>count: {count}</h2>
//             <button onClick={()=>{
//                 let cnt =2
//                 this.setState({
//                     count : 1+count,
                   
//                 }
//                 );
               
//             }}>Count Increase</button>
//         </div>
//         );
//     };
// }
// export default UserClass;


import React from "react";

class UserClass extends React.Component{

    constructor(props){

        super(props)
        this.state = {
            count : 1,
            count2 : 1
        }
    }


    render(){

        const {name} = this.props;
        const {count ,count2} = this.state;
        return (
            <div className="userClass-card">
                <h1 className="name">
                    {name}
                </h1>
                <p>count : {count}</p>
                <button className="increase" onClick ={()=>{
                    this.setState(
                        {
                            count : count+1,
                            count2 : count2+1
                        }
                    )
                }} >increaser</button>
            </div>
        );
    }
    
}
export default UserClass;