import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import emptyCart from "../../empty-cart.svg";
import { clearcart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
    const cartItem = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearBtn = () => {
        dispatch(clearcart());
    }  



    const cartItems = useSelector((store) => store.cart.items);
    return cartItem.length=== 0 ? 

    <div className=" flex w-full flex-col justify-center items-center my-auto h-[80vh]">
        <img className="w-80 h-80 mb-6" src={emptyCart} alt="empty-cart"/>
        
        <div className="font-bold text-gray-500 text-3xl">Your cart is empty</div>
        <div className="font-semibold text-gray-500 text-base mb-4">
            You can go to home page to view more restaurants
        </div>
        <Link to="/">
            <button className="w-fit p-2 px-4 font-bold text-white bg-orange-400 rounded-lg cursor-pointer transition-all ease-in-out duration-200 active:bg-orange-500 active:transform active:scale-95">
                See restaurants near you
            </button>
        </Link>
    </div>
    
    : 
    
    <div className="flex items-center justify-center text-center py-4">
        <div className="w-2/3 h-[90%]">
            <div>
                <h1 className="text-2xl font-bold m-4 ">Cart</h1>
            </div>
            { cartItem.length!==0 && <button className="p-2 m-4 bg-gray-400 rounded-lg" onClick={handleClearBtn}>clearcart</button>
            }
            <div className="w-9/12 m-auto  shadow-md rounded-md">
                <ItemList items={cartItems}/>
            </div>
        </div>
    </div>
}

export default Cart;