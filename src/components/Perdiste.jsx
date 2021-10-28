import React from 'react'
import '../css/Contenedor.css'
import { Contenedor } from './Contenedor'

export const Perdiste = (props) => {
    return (
        <Contenedor>
            <h1>¡Ups, has perdido!</h1>
            <img className="imagen" src="https://img.icons8.com/clouds/100/000000/sad-ghost.png" alt="Perdiste" />
            <div className="contendor-botones">
                <button className="boton" >Ver respuestas Correctas</button>
                <button className="boton" >Regresar a conferencia</button>
            </div>
        </Contenedor>
    )
}
