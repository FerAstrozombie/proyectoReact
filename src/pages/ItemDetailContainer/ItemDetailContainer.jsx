import data from "../../components/mockData";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Contador from "../../components/Contador/Contador";
import "./styles.css";

const ItemDetailContainer = () => {

    const {id} = useParams();
    const stock = 9;

    const [producDetail, setProductDetail] = useState([]);
    useEffect (() => {
        getItem.then((response) => {
            const dataFiltrada = response.filter((product) => product.id === id);
            setProductDetail(...dataFiltrada);
        })
    },)

    const getItem = new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });

    
    return (
        <div className="contenedorDetalle">
            <ItemDetail lista = {producDetail} />
            <Contador stock = {stock} />
            <button className="boton">Agregar al carrito</button>        
        </div>
    )

}

export default ItemDetailContainer