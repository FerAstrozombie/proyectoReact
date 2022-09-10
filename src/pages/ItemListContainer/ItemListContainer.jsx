import "./styles.css"
import data from "../../components/mockData"
import { useEffect, useState } from "react"
import ItemList from "../../components/ItemList/ItemList"

import React from 'react'

const ItemListContainer = ({greeting}) => {
    const [productList, setProductList] = useState([]);
    useEffect (() => {
        getProducts.then((response) => {
            setProductList(response);
        })
    },)

    const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 2000);
        });
        
        return (
        <>
        <h2 className="texto">{greeting}</h2>
        <ItemList lista = {productList}/>        
        </>
    )
}

export default ItemListContainer