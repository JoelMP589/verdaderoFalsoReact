import React from 'react'
import '../css/Contenedor.css'
import { Contenedor } from './Contenedor'

export const Instrucciones = (props) => {

    return (
        <Contenedor>
            <>
                <h1>Instrucciones</h1>
                <p>
                    Lee con atención las siguientes 10 acciones y selecciona verdadero o falso, según corresponda.
                    <br />
                </p>
                <h1>¿Cómo jugar?</h1>
                <p>
                    Da clic en el botón Verdadero o Falso para responder.
                    <br />
                </p>
                <button className="boton" onClick={props.nextStep}>Comenzar</button>
            </>
        </Contenedor>
    )
}
