import "./styles.css"
const ItemDetail = ({lista}) => {
    
    return (
    <div className="descripcion">
        <img className="imagenesGuitarra" src={lista.imagen} alt= {lista.nombre} />
        <h3>{lista.nombre}</h3>
        <p>{lista.descripcion}</p>
    </div>
    )
}

export default ItemDetail