import "./styles.css"


const Inicio = () => {
    return (
    <div>
        <h1>Birenvenido a tu tienda de guitarras</h1>
        <h3>Te contamos un poco sobre nosotros</h3>
        <div className="textFlex">
            <div className="textoReducido">
                <p className="textoInicio">
                    Somos una empresa familiar, fundada en 1939 por Don Cosme.
                    Mantenemos la misma esencia desde ese entonces: Una guitarra
                    es como un amigo.
                    Te invitamos a que nos conozcas y nos visites. Estamos ubicados
                    en zona oeste, donde esta el agite y donde vive el Rock.
                    Si venis vas a encontrar esa guitarra que estas buscando.
                </p>
            </div>
            <div>
                <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.415329555855!2d-58.56700808494536!3d-34.64421256714846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7e5eee8b3c9%3A0x35485944483432cd!2sAv.%20de%20Mayo%20360%2C%20B1704BUQ%20Ramos%20Mej%C3%ADa%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1663266265559!5m2!1ses!2sar">
                </iframe>
            </div>
            
        </div>  

    
    </div>
    )
}

export default Inicio