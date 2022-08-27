import "./styles.css";
import logo from '../../logo.png';
import { CartWdget } from "../CartWidget/CartWdget";

const NavBar = () => {
    return (<div className="menu">
        <img src={logo} className="logo" alt="logo" />
        <ul>
            <li className="lista"><a href="www.google.com">Inicio</a></li>
            <li className="lista"><a href="www.google.com">Tienda</a></li>
            <li className="lista"><a href="www.google.com">Conocenos</a></li>
            <li className="lista"><a href="www.google.com">Contacto</a></li>
        </ul>
        <button className="botonSesion">Inicia sesion</button>
        <CartWdget/>
    </div>)
}

export default NavBar;