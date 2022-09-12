import "./styles.css";
import logo from '../../logo.png';
import { CartWdget } from "../CartWidget/CartWdget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (<div className="menu">
        <NavLink to={"./App.js"}>
            <img src={logo} className="logo" alt="logo" />
        </NavLink>
        
        <ul>
            <li className="lista"><NavLink to={"./App.js"}>Inicio</NavLink></li>
            <li className="lista"><NavLink to={"/productos"}>Productos</NavLink></li>   
            <li className="lista"><NavLink to={"/category/Electrica"}>Electrica</NavLink></li> 
            <li className="lista"><NavLink to={"/category/Electroacustica"}>Electroacustica</NavLink></li>        
        </ul>
        <button className="botonSesion">Inicia sesion</button>
        <CartWdget/>
    </div>)
}

export default NavBar;