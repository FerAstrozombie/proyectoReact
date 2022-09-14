import "./styles.css"
import Contador from "../Contador/Contador";
import { useState } from 'react';
import { Link } from "react-router-dom";



const ItemDetail = ({lista}) => {    
    const [items , setItem] = useState(0);
    const clickeado = () => {
        console.log(items);
    }
    return (
        <div className="descripcion">
            <img className="imagenesGuitarra" src={lista.imagen} alt= {lista.nombre} />
            <h3 className="titulo">{lista.nombre}</h3>
            <h2 className="detalle">Categoria: {lista.categoria}</h2>
            <p>{lista.descripcion}</p>
            <p>Precio: ${lista.precio}</p>
            <p>Stock: {lista.stock}</p>
            <Contador stock = {lista.stock} setItem = {setItem} items = {items} />            
            <Link to={"/cart"}><button className="boton" onClick={clickeado}>Agregar al carrito</button></Link>
        </div>
    )
}

export default ItemDetail