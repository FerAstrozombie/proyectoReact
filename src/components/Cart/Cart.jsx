import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import "./styles.css"
const Cart = () => {
    const {cart, removeItem} = useContext(CartContext);
    console.log("cart", cart);
    return (
        <>
            <h1>Carrito</h1>
            {cart.length ===0 ? (
                <>
                    <h3>No hay productos en tu carrito</h3>
                    <Link className="linkVolver" to={"/productos"}>Volver a productos</Link>
                </>
                ) : (
                <>
                    {cart.map((item) => (
                        <div className="carritoflex" key={item.id}>
                            <div className="detatalleCarrito">
                                <img className="imgCarrito" src={item.imagen} alt={item.nombre} />
                                <h3>{item.nombre}</h3>
                                <h4>Precio: ${item.precio}</h4>
                                <h4>Cantidad: {item.cantidad}</h4>
                                <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
                            </div>
                        </div>
            ))}
                </>
            )}
        </>
    )
}

export default Cart