import React from 'react'
import "./styles.css"
import { FaShoppingCart } from "react-icons/fa";


export const CartWdget = () => {
    return (
    <div>
        <FaShoppingCart className='carrito' />
        <span className='spanCarrito'>0</span>        
    </div>
    )
}

