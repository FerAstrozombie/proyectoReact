import "./styles.css"

const ItemDetail = ({lista}) => {
    console.log(lista);
    return (
        <div className="descripcion">
            <img className="imagenesGuitarra" src={lista.imagen} alt= {lista.nombre} />
            <h3 className="titulo">{lista.nombre}</h3>
            <h2 className="detalle">Categoria: {lista.categoria}</h2>
            <p>{lista.descripcion}</p>
            <p>Precio: ${lista.precio}</p>
            <p>Stock: {lista.stock}</p>
        </div>
    )
}

export default ItemDetail