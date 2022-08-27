import "./styles.css"

import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
    <div className="titulo">
        <h2 className="texto">{greeting}</h2>
    </div>
    )
}

export default ItemListContainer