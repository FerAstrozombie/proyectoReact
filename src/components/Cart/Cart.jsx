import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import "./styles.css"
const Cart = () => {
    const {cart, removeItem, clear, totalPrecioCart} = useContext(CartContext);
    console.log("cart", cart);
    return (
        <>
            <div className="marco">
                <h1>Carrito</h1>
                {cart.length > 0 ?
                    <button className="botonVaciar" onClick={() => clear()}>Vaciar carrito</button>
                : ""}
                {totalPrecioCart() > 0 ?
                <h3>Total: ${totalPrecioCart()}</h3>
                : ""}
            </div>
            {cart.length ===0 ? (
                <>
                    <h3>No hay productos en tu carrito</h3>
                    <Link className="linkVolver" to={"/productos"}>Volver a productos</Link>
                </>
                ) : (
                <div className="carritoContenedor">
                    {cart.map((item) => (
                        
                        <div className="carritoflex" key={item.id}>
                            <div className="detatalleCarrito">
                                <img className="imgCarrito" src={item.imagen} alt={item.nombre} />
                                <h3 className="nombre">{item.nombre}</h3>
                                <h4>Precio Unitario: ${item.precio}</h4>
                                <h4>Precio total: ${item.precio * item.cantidad}</h4>
                                <h4>Cantidad: {item.cantidad}</h4>
                                <button className="botonAgregar" onClick={() => removeItem(item.id)}>Eliminar producto</button>
                            </div>
                        </div>
            ))}
                </div>
            )}
        </>
    )
}

export default Cart