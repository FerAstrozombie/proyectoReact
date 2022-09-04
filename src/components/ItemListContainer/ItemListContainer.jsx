import "./styles.css"
import Contador from "../Contador/Contador"
import data from "../mockData"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"

import React from 'react'

const ItemListContainer = ({greeting}) => {
    const [productList, setProductList] = useState([]);
    useEffect (() => {
        getProducts.then((response) => {
            setProductList(response);
        })
    },)

    const stock = 9;

    const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 2000);
        });
        
        return (
        <>
        <h2 className="texto">{greeting}</h2>
        <ItemList lista = {productList}/>
        <Contador stock = {stock} />
        </>
    )
}

export default ItemListContainer