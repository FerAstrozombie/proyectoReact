import "./styles.css"
import { useState } from 'react';

const Contador = ({stock}) => {

    const [valor , actualizador] = useState(0);    
    
    if (valor < stock) {

        return (
            
            <>
            <button className="contador" onClick={() =>{
                actualizador(valor + 1);
            }}>+</button>
            <span>{valor}</span>
            <button className="contador" onClick={() =>{
                if (valor === 0){
                    
                }else {
                    actualizador(valor - 1);
                }
            }}>-</button>
            </>
    
        )
    }else {
        return (
            
            <>
            <button className="contador" onClick={() =>{
                
            }}>+</button>
            <span>{valor}</span>
            <button className="contador" onClick={() =>{
                actualizador(valor - 1);
            }}>-</button>
            </>
        )
    }

}

export default Contador

