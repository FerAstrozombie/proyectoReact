import "./styles.css"
import { useState } from 'react';

const Contador = (props) => {

    const [items , setItem] = useState(0);    
    
    const sumar = () => items < props.stock  ? setItem(items + 1) : alert("No hay mas stock disponible")
    const restar = () => items > 0 ? setItem(items - 1) : alert("No se aceptan valores negativos")

    return (
        <>
            <div className="acomodadoContador">            
                <button className="contador" onClick={sumar}>+</button>
                <span>{items}</span>
                <button className="contador" onClick={restar}>-</button>        
            </div>
        </>
    )
    

}

export default Contador

