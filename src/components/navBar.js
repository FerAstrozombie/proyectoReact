import logo from '../logo.png';
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
    </div>)
}

export default NavBar;