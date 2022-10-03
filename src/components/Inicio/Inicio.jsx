import "./styles.css"

const Inicio = () => {
    return (
    <div>
        <h1>Birenvenido a tu tienda de guitarras</h1>
        <h3>Te contamos un poco sobre nosotros</h3>
        <div className="textoReducido">              
                <div className="flexizado" data-aos="fade-right">
                    <p className="textoInicioUno">
                        Somos una empresa familiar, fundada en 1939 por Don Cosme.
                        Mantenemos la misma esencia desde ese entonces: Una guitarra
                        es como un amigo.
                        Te invitamos a que nos conozcas y nos visites. Estamos ubicados
                        en zona oeste, donde esta el agite y donde vive el Rock.
                        Si venis vas a encontrar esa guitarra que estas buscando.
                    </p>
                </div>
                <div data-aos="fade-left">
                    <img className="imagen" src="../imagenes/1.jpg" alt="Guitarra!" />
                </div>
        </div>
        <div className="textoReducido">              
                <div data-aos="fade-right">
                    <img className="imagen" src="../imagenes/3.jpg" alt="Guitarra!" />
                </div>
                <div className="flexizado" data-aos="fade-left">
                    <p className="textoInicioDos">
                    La guitarra Les Paul o guitarra Gibson Les Paul, que es su nombre oficial, es una guitarra Gibson de gama alta, que comenzó a fabricarse en la década de 1950. Su principal característica que las diferencia de otras Gibson es que su forma es inconfundible, con su mástil corto, sus dos pastillas y sus cuatro botones.
                    </p>
                </div>
        </div>
        <div className="textoReducido">              
                <div className="flexizado" data-aos="fade-right">
                    <p className="textoInicioUno">
                    Una guitarra electro-acústica es un instrumento musical armónico equipado con pastillas, un micrófono o transductores. En las guitarras electro-acústicas, los transductores y micrófonos se utilizan siempre porque las pastillas convencionales no son capaces de captar las vibraciones de los materiales no magnéticos.
                    </p>
                </div>
                <div data-aos="fade-left">
                    <img className="imagen" src="../imagenes/7.jpg" alt="Guitarra!" />
                </div>
        </div>
        <div className="textoReducido">              
                <div data-aos="fade-right">
                    <img className="imagen" src="../imagenes/6.jpg" alt="Guitarra!" />
                </div>
                <div className="flexizado" data-aos="fade-left">
                    <p className="textoInicioDos">
                    La guitarra eléctrica es un tipo de guitarra en la que, a diferencia de la guitarra española y la guitarra sajona, su caja no hace resonancia, por lo que el sonido se produce indirectamente por inducción eléctrica y a través de un amplificador o también a través de un pedal de efectos.
                    </p>
                </div>
        </div>
        <div className="textoReducido">              
                <div className="flexizado" data-aos="fade-right">
                    <p className="textoInicioUno">
                    La guitarra es un instrumento musical de cuerda pulsada, compuesto de una caja de madera, un mástil sobre el que va adosado el diapasón o trastero —generalmente con un agujero acústico en el centro de la tapa (boca)—, y seis cuerdas. Sobre el diapasón van incrustados los trastes, que permiten las diferentes notas.
                    </p>
                </div>
                <div data-aos="fade-left">
                    <img className="imagen" src="../imagenes/2.jpg" alt="Guitarra!" />
                </div>
        </div>
    </div>
    )
}

export default Inicio