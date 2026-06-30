import { createContext, useContext, useState }  from "react";
import { useNavigate } from "react-router-dom";

//Creo contexto
const CartContext = createContext();


//Custom hook
export const useCart = ()=>{
    const context = useContext(CartContext);

    if(!context){
        throw new Error("use Cart debe usarse dentro del CartProvide");
    }

    return context;
}

//Provider
export const CartProvider = ({children}) =>{

    const navigate = useNavigate();

    const [cart,setCart] = useState([]);

    const isInCart = (item)=>{
        const inCart = cart.some(element => element.id === item.id);
        return inCart
    }

    const addItem = (item) => {
        if(isInCart(item)){
            alert("El producto ya existe en el carrito")
            return;
        }

        setCart([...cart,item]);
        alert("Producto agregado al carrito");
    }

    const removeItem = (id) => {
        const cartFilter = cart.filter(element => element.id !== id)
        setCart(cartFilter);
        alert("Producto eliminado");
    }

    const clearCart = ()=>{
        setCart([]);
    }

    const getTotalItems = ()=>{
        return cart.length;
    }

    const getCartTotal = ()=>{
        return cart.reduce((acc, element) => acc + element.price, 0);
    }

    const checkout = () =>{
        alert("Su compra a sido realizada")
        clearCart();
        navigate("/");
    }

    const values = {clearCart, removeItem, addItem, isInCart, getTotalItems, getCartTotal, checkout, cart};
    return <CartContext.Provider value={values} >{children}</CartContext.Provider>
}