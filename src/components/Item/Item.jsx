import "./styles.css"
const Item = ({imagen, nombre, precio, categoria}) => {
    return (
    
        <div className="guitarras">
            <img className="imagenesGuitarra" src={imagen} alt= {nombre} />
            <h2>{nombre}</h2>
            <h3>Precio: ${precio}</h3>
            <h2>Categoria: {categoria}</h2>
            <button className="botonAgregar">Agregar al carrito</button>
        </div>
    
    )
}

export default Item