import { useContext } from "react"
import { BancoContext } from "../context/BancoContext";
import '../css/Preguntas.css'

export const Preguntas = (props) => {
    const { Acciones, respuestasUsuario, setRespuestasUsuario, contador, setContador, respuestasCorrectas } = useContext(BancoContext);

    const handleOnRespuesta = (respueta) => {
        if (contador === 10) {
            console.log("entran en la primer condicion: " + contador);
            const respuestasCopy = [...respuestasUsuario];
            respuestasCopy.push(respueta);
            console.log(respuestasCopy);
            setRespuestasUsuario(respuestasCopy);
            if (JSON.stringify(respuestasCorrectas) === JSON.stringify(respuestasCopy)) {
                props.goToStep(13);
            } else {
                props.goToStep(12);
            }
        } else if (contador < 10) {
            console.log("entra en la segunda condicion: " + contador);
            const respuestasCopy = [...respuestasUsuario];
            respuestasCopy.push(respueta);
            console.log(respuestasCopy);
            setRespuestasUsuario(respuestasCopy);
            setContador(prev => prev + 1);
            props.nextStep();
        }
    }

    return (
        <div className="preguntas">
            <p className="contador">{contador}/10</p>
            <div className="pregunta">
                <h5>{Acciones[props.numeroPregunta]}</h5>
            </div>
            <div className="respuestas">
                <img onClick={() => handleOnRespuesta(true)} className="botonImagen" src='/assets/verdad.png' alt="verdadero" />
                <img onClick={() => handleOnRespuesta(false)} className="botonImagen" src='/assets/Falso.png' alt="falso" />
            </div>
        </div>
    )
}
