import React from 'react'
import "./styles.css"
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react"
import { CartContext } from '../context/CartContext';


export const CartWdget = () => {
    const {cart} = useContext(CartContext);    
    return (
    <div>
        <FaShoppingCart className='carrito' />
        <span className='spanCarrito'>{cart.length}</span>        
    </div>
    )
}

