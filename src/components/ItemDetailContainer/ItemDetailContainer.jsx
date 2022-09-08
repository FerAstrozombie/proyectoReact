import data from "../mockData"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [producDetail, setProductDetail] = useState([]);
    useEffect (() => {
        getItem.then((response) => {
            setProductDetail(response.find(el => el.id === "1"));
        })
    },)

    const getItem = new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });

    return (
        <ItemDetail lista = {producDetail} />
    )

}

export default ItemDetailContainer