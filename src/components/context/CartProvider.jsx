import { useState } from "react"
import { CartContext } from "./CartContext";

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

    const isInCart = (id) => {
        return cart.find((cartItem) =>cartItem.id === id);
        
    };

    const clear = () => {
        setCart([]);
    };
    
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

    return (
        <CartContext.Provider value={{cart , addToCart , removeItem, clear}}>
            {children}
        </CartContext.Provider>
    );
};
