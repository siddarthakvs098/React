import ItemLists from "./ItemLists";
import { useState } from "react";
const RestuarantCategory = ({data,showItems,setShowIndex}) =>{
//    const [visible,setVisible] = useState(false);
   const handleClick = ()=>{
        setShowIndex();
   }

    // console.log(data.itemCards);
    return <div onClick={handleClick}>

        <div className="  w-6/12 m-auto bg-gray-100 shadow-lg my-2 p-4 cursor-pointer ">
            
            <div className=" flex justify-between "  >
            
                <span className=" font-bold text-lg"> {data.title} ({data.itemCards.length} )</span>
                <span className=" font-bold  " >^</span>
            </div>      

        </div>
        {/* visible ? (<ul ><ItemLists items= {data.itemCards}  /></ul> ):<div><div/> */}
        <div >
            {  showItems && <ul ><ItemLists items= {data.itemCards}  /></ul>  }   
                
        </div>
        

    </div>
}

export default RestuarantCategory;