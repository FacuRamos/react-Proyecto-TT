import { useCart } from "../../context/CartContext"
import { CartItem } from "./CartItem";

export const CartList = ()=>{
    const {cart} = useCart();


    return <>
    
    <div className="cart-items-containers">
        {cart.map(item=>{
            return <CartItem key={item.id} item={item}  ></CartItem>
        })}
    </div>
    

    </>
}