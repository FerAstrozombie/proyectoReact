import data from "../../components/mockData";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "./styles.css";

const ItemDetailContainer = () => {

    const {id} = useParams();
    

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
        </div>
    )

}

export default ItemDetailContainer