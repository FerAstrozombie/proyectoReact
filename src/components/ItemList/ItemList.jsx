import Item from "../Item/Item";
import "./styles.css"

const ItemList = ({lista}) => {
    
    return (
        (<div className="guitarrasFlex">
            {
                lista.map((producto) =>(
                    <Item 
                        nombre = {producto.nombre} 
                        precio ={producto.precio} 
                        imagen = {producto.imagen} 
                    />
                ))
            }
        </div>)
    )
}

export default ItemList