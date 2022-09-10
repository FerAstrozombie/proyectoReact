import "./styles.css"

const ItemDetail = ({lista}) => {
    console.log(lista);
    return (
        <div className="descripcion">
            <img className="imagenesGuitarra" src={lista.imagen} alt= {lista.nombre} />
            <h3 className="titulo">{lista.nombre}</h3>
            <p>{lista.descripcion}</p>
            <p>Precio: ${lista.precio}</p>
        </div>
    )
}

export default ItemDetail