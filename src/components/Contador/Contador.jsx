import "./styles.css"

const Contador = ({setItem , items, stock}) => {

    const sumar = () => items < stock  ? setItem(items + 1) : alert("No hay mas stock disponible")
    const restar = () => items > 0 ? setItem(items - 1) : alert("No se aceptan valores negativos")

    return (
        <>
            <div className="acomodadoContador">            
                <button className="contador" onClick={sumar}>+</button>
                <span className="spanDetalle">{items}</span>
                <button className="contador" onClick={restar}>-</button>        
            </div>
        </>
    )
    

}

export default Contador

