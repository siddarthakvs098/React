
import { UseSelector, useSelector } from "react-redux";
import ItemLists from "./ItemLists";
import { useDispatch } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
const Cart = ()=>{
    const cartItems = useSelector((state)=>state.cart.items);
    const dispatch = useDispatch();
    const handleClick = ()=>{
            dispatch(clearCart())
    }
    return <div className="p-4 m-auto  text-center  " >
            
        <div className="font-bold text-2xl " >Cart</div>
        <button className=" bg-black text-white p-2 rounded-md " onClick={()=>handleClick()} > Clear cart</button>
        <div className="rounded-l " >
        
        {cartItems.length === 0 ?  <p className="m-2 "> Your cart is empty </p>   : <ItemLists  items={cartItems}/> } 
        </div>
       
    </div>
};
export default Cart;