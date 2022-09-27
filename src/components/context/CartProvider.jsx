import { useState } from "react"
import { CartContext } from "./CartContext";

// En esta funcion uso el isInCart para validar el producto a añadir al Cart
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addToCart = (item , cantidad) => {
        const itemInCart = isInCart(item.id)
        if (itemInCart) {
            itemInCart.cantidad = itemInCart.cantidad += cantidad;            
        }else {
            setCart([...cart, {...item, cantidad}]);
        }
    };

    // Chequeo si el producto esta en el Cart. Lo hago con un find para que me devuelva en objeto
    const isInCart = (id) => {
        return cart.find((cartItem) =>cartItem.id === id);
        
    };

    //Con esta funcion elimino todo del Cart
    const clear = () => {
        setCart([]);
    };

    //Con esta funcion borro solo el producto seleccionado y envio un nuevo arreglo al Cart
    const removeItem = (productId) => {
        let nuevoArreglo = [];
        cart.forEach((product) => {
            if(product.id === productId){
                console.log(product);
            }else {
                nuevoArreglo.push(product);
            }
        });
        setCart(nuevoArreglo);
    };

    //Con esta funcion calculo el precio total del Cart
    const totalPrecioCart = () => {
        return cart.reduce((acc, cartItem) => acc + cartItem.precio * cartItem.cantidad, 0);
    };

    return (
        <CartContext.Provider value={{cart , addToCart , removeItem, clear, totalPrecioCart}}>
            {children}
        </CartContext.Provider>
    );
};
