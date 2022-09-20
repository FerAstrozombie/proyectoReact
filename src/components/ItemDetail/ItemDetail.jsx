import "./styles.css"
import Contador from "../Contador/Contador";
import { useState , useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({lista}) => {    
    const [items , setItem] = useState(1);
    const clickeado = () => {
        console.log(items);
    }
    const {addToCart} = useContext(CartContext);
    function onAdd (lista) {        
        addToCart(lista, items)
    }
    return (
        <div className="descripcion">
            <img className="imagenesGuitarra" src={lista.imagen} alt= {lista.nombre} />
            <h3 className="titulo">{lista.nombre}</h3>
            <h2 className="detalle">Categoria: {lista.category}</h2>
            <p>{lista.descripcion}</p>
            <p>Precio: ${lista.precio}</p>
            <p>Stock: {lista.stock}</p>
            <Contador stock = {lista.stock} setItem = {setItem} items = {items} precio = {lista.precio} />
            <Link to={"/cart"}>
                <button className="boton" onClick={clickeado}>Ir al carrito</button>
            </Link>
            <button className="boton" onClick={() => onAdd(lista)}>Agregar al carrito</button>
            <Link to={"/productos"}>Volver</Link>
        </div>
    )
}

export default ItemDetail