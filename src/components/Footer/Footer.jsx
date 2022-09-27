import React from 'react'
import logo from '../../logo.png';
import "./styles.css";


const Footer = () => {
    return (
        <footer className='flexPadre'>
            <div className='flexFooter'>
                <img className='logoFooter' src={logo} alt="" />
                <h5 className='textoFooter'>Guitarras del oeste</h5>
            </div>
            <div>
                <h5 className='copyrigth'>© Pagina realizada por FerAstrozombie ©</h5>
            </div>
            <div>
                <img className='tamañoLogo' src="../../imagenes/facebook.svg" alt="logo facebook" />
                <img className='tamañoLogo' src="../../imagenes/instagram.svg" alt="logo instagram" />
                <img className='tamañoLogo' src="../../imagenes/mail.svg" alt="logo mail" />
            </div>
        </footer>
    )
}

export default Footer