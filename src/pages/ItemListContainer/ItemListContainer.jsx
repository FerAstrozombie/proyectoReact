import "./styles.css"
import data from "../../components/mockData"
import { useEffect, useState } from "react"
import ItemList from "../../components/ItemList/ItemList"
import { useParams } from "react-router-dom"

import React from 'react'


const ItemListContainer = ({greeting}) => {
    const {categoryName} = useParams();
    console.log(categoryName);
    const [productList, setProductList] = useState([]);
    useEffect (() => {
        if(categoryName){
            const response = data.filter((response) => response.category === categoryName)
            setProductList(response);
        }else{
            getProducts.then((response) => {
                setProductList(response);
            })
        }  
    // eslint-disable-next-line      
    },[categoryName])

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