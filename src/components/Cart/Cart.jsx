import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import "./styles.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {collection, addDoc, getFirestore} from "firebase/firestore"
import moment from "moment/moment";


const Cart = () => {
    const {cart, removeItem, clear, totalPrecioCart} = useContext(CartContext);
    const createOrder = () =>{
        const db = getFirestore();
        const order = {
            buyer: {
                    neme: "Fer",
                    phone: "1162885828",
                    email: "fernando_punk77@hotmail.com"
            },
            items: cart,
            total: cart.reduce((valorPasado, valorActual) => valorPasado + (valorActual.precio * valorActual.cantidad),0),
            date: moment().format(),
        };
        const query = collection(db, "orden");
        addDoc(query, order)
        .then(({id}) => {
            console.log(id);
            alert ("Felicidades por tu compra")})
        .catch(() => alert("Tu compra no pudo ser realizada, intentalo mas tarde"))
        
    }
    const mensajeBorrado = () => {
        toast.error('Producto eliminado del carrito', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });

    };
    const mensajeVaciado = () => {
        toast.error('Carrito Vaciado', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });

    };
    console.log("cart", cart);
    return (
        <>
            <div className="marco">
                <h1>Carrito</h1>
                {cart.length > 0 ?
                    <button className="botonVaciar" onClick={() => {clear(); mensajeVaciado()}}>Vaciar carrito</button>
                : ""}
                <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
                {totalPrecioCart() > 0 ?
                <h3>Total: ${totalPrecioCart()}</h3>
                : ""}
                {cart.length > 0 ? 
                    <button className="botonVaciar" onClick={createOrder}>Crear orden</button>
                :"" }
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
                                <button className="botonAgregar" onClick={() => {removeItem(item.id); mensajeBorrado()}}>Eliminar producto</button>
                                <ToastContainer
                                position="top-right"
                                autoClose={4000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover />
                            </div>
                        </div>
            ))}
                </div>
            )}
        </>
    )
}

export default Cart