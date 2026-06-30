import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";

export const CartView = ()=>{
    
    const {cart} = useCart();


    return <section className="cart-container">
        <h1>Tu carrito de compras</h1>
        {cart.length ?  
        <>
        <CartList></CartList>
        <CartSummary></CartSummary>
        </>
        : 
        <>
        <p className="empty-cart">El carrito esta vacion</p>
        <Link to={"/"} className="btn primary bg-primary">Volver</Link>
        </>
        }
    </section>

}