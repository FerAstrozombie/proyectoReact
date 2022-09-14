import "./styles.css"
const Item = ({imagen, nombre, precio, categoria, stock}) => {
    return (
    
        <div className="guitarras">
            <img className="imagenesGuitarra" src={imagen} alt= {nombre} />
            <h2>{nombre}</h2>
            <h3>Precio: ${precio}</h3>
            <h2>Categoria: {categoria}</h2>
            <h4>Stock: {stock}</h4>            
        </div>
    
    )
}

export default Item