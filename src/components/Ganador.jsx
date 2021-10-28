import React from 'react'
import '../css/Contenedor.css'
import { Contenedor } from './Contenedor'

export const Ganador = (props) => {
    return (
        <Contenedor>
            <h1>¡Felicidades!</h1>
            <p>
                Acertaste en todas tus respuestas
            </p>
            <div className="contendor-botones">
                <button className="boton" >Regresar a conferencia</button>
            </div>
        </Contenedor>
    )
}
