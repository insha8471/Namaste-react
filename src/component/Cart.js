import { useDispatch, useSelector } from "react-redux";
import { clearcart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
    const cartItem = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearBtn = () => {
        dispatch(clearcart());
    }  

    const cartItems = useSelector((store) => store.cart.items);
    return <div className="text-center py-4">
        <div>
            <h1 className="text-2xl font-bold m-4 ">Cart</h1>
        </div>
        { cartItem.length!==0 && <button className="p-2 m-4 bg-gray-400 rounded-lg" onClick={handleClearBtn}>clearcart</button>
        }
        <div className="w-9/12 m-auto  shadow-md rounded-md">
            <ItemList items={cartItems}/>
        </div>
    </div>
}

export default Cart;