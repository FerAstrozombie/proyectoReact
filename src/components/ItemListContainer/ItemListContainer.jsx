import "./styles.css"
import Contador from "../Contador/Contador"

import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
    <div className="titulo">
        <h2 className="texto">{greeting}</h2>
        <Contador stock = {9} />
    </div>
    )
}

export default ItemListContainer