import { CDN_URL } from "../../utils/constants";
import { addItem } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemLists = ({items})=>{
   const dispatch = useDispatch();
   const  handleClick = (it)=>{
       dispatch(addItem(it));
    }

   
    return <div className="p-2 my-2 w-6/12 m-auto  " >
   { items.map((it)=> 
        
    <div className="shadow-lg m-2 p-2 rounded-lg bg-gray-100 border-gray-200 border-b-2 text-left flex justify-between " key={it.card.info.id}>
        
        <div className="py-2 w-6/12" >
            <span>{it.card.info.name}</span>
            <span > - ₹{it.card.info.price/100}</span>
            <p className="text-xs " >{it.card.info.description}</p>
        </div>
        
        <div className="p-4  w-3/12">
            <div className=" absolute" >
                <button className=" p-2 mx-1 my-1 bg-white shadow-lg rounded-lg" onClick={()=>handleClick(it)}  >Add +</button>
            </div>
            
            <img src={CDN_URL + it.card.info.imageId } className=" rounded-lg " alt="" />
        </div>
        
    </div> 
        
        )}
    </div>
}

export default ItemLists;