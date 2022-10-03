import React from 'react'
import logo from '../../logo.png';
import "./styles.css";


const Footer = () => {
    return (
        <footer className='flexPadre'>
            <div className='flexFooter'>
                <img className='logoFooter' src={logo} alt="" />
                <h5 className='textoFooter'>Guitarras del oeste</h5>
                <h5 className='copyrigth'>© Pagina realizada por FerAstrozombie ©</h5>
            </div>
            <div>
                <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.415329555855!2d-58.56700808494536!3d-34.64421256714846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7e5eee8b3c9%3A0x35485944483432cd!2sAv.%20de%20Mayo%20360%2C%20B1704BUQ%20Ramos%20Mej%C3%ADa%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1663266265559!5m2!1ses!2sar">
                </iframe>
            </div>
            <div className='flexRedes'>
                <div className='flexParrafo'>
                    <img className='tamañoLogo' src="../../imagenes/facebook.svg" alt="logo facebook" />
                    <p>Facebook</p>
                </div>
                <div className='flexParrafo'>
                    <img className='tamañoLogo' src="../../imagenes/instagram.svg" alt="logo instagram" />
                    <p>Instagram</p>
                </div>
                <div className='flexParrafo'>
                    <img className='tamañoLogo' src="../../imagenes/mail.svg" alt="logo mail" />
                    <p>Mail</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer