import { useState } from "react"
import { CartContext } from "./CartContext";

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item , cantidad) => {
        if (isInCart(item.id)) {
            return
        }else {
            setCart([...cart, {...item, cantidad}]);
        }
    };

    const isInCart = (id) => {
        return cart.find((item) =>item.id === id);
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
        <CartContext.Provider value={{cart , addToCart , removeItem,}}>
            {children}
        </CartContext.Provider>
    );
};
