import "./styles.css";
import logo from '../../logo.png';
import { CartWdget } from "../CartWidget/CartWdget";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const NavBar = () => {
    const {cart} = useContext(CartContext); 
    return (<div className="menu">
        
        <NavLink to={"/"}>
            <img src={logo} className="logo" alt="logo" />
        </NavLink>
        
        <ul>
            <li className="lista"><NavLink className={"lista"} to={"/"}>Inicio</NavLink></li>
            <li className="lista"><NavLink className={"lista"} to={"/productos"}>Productos</NavLink></li>   
            <li className="lista"><NavLink className={"lista"} to={"/category/Electrica"}>Electrica</NavLink></li> 
            <li className="lista"><NavLink className={"lista"} to={"/category/Electroacustica"}>Electroacustica</NavLink></li>        
        </ul>
        <button className="botonSesion">Inicia sesion</button>
        {cart.length > 0 ? 
        <NavLink to={"/cart"}>        
                <CartWdget/>        
        </NavLink> 
        : ""}                
    </div>)
}

export default NavBar;