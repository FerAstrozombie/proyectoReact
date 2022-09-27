import "./styles.css"
/* import data from "../../components/mockData" */
import { useEffect, useState } from "react"
import ItemList from "../../components/ItemList/ItemList"
import { useParams } from "react-router-dom"
import {getFirestore, getDocs, collection, query, where} from "firebase/firestore"



const ItemListContainer = ({greeting}) => {
    const {categoryName} = useParams();
    console.log(categoryName);
    const [productList, setProductList] = useState([]);
    useEffect (() => {

        getProducts();
        /* if(categoryName){
            const response = data.filter((response) => response.category === categoryName)
            setProductList(response);
        }else{
            getProducts.then((response) => {
                setProductList(response);
            })
        }   */
    // eslint-disable-next-line      
    },[categoryName])


    const getProducts = () => {
        const db = getFirestore();
        const querySnapshot = collection(db, "Items");
        if(categoryName){
            const queryFiltered = query(querySnapshot, where("category", "==",categoryName))
            getDocs(queryFiltered).then((response) => {
                console.log(response.docs);
                const data = response.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()}
                })
                setProductList(data);
            })
        }else{
            getDocs(querySnapshot).then((response) => {
                console.log(response.docs);
                const data = response.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()}
                })
                setProductList(data);
            })
        }
        
    }
    /* const getProducts = new Promise((resolve, reject) => { 
            setTimeout(() => {
                resolve(data);
            }, 2000);
            
        }); */
        
        return (
        <>
        <h2 className="texto">{greeting}</h2>
        <ItemList lista = {productList}/>     
        </>
    )
}

export default ItemListContainer