import { useContext, useState } from "react"
import { BancoContext } from "../context/BancoContext";
import '../css/Preguntas.css'
import useSound from 'use-sound';
import success from '../assets/acierto.mp3';


export const Preguntas = (props) => {
    const {
        respuestasUsuario, setRespuestasUsuario, contador, setContador, respuestasCorrectas,
        setModalGanador, setModalPerdedor,
        /* sendMessageToFirebase, sendCorrectAnswersToFirebase, sendIncorrectAnswersToFirebase */ } = useContext(BancoContext);
    const [btnPaloma, setBtnPaloma] = useState('/assets/PALOMA.png')
    const [btnX, setBtnX] = useState('/assets/X.png')
    const [playSuccess] = useSound(success);

    const handleOnRespuesta = (respueta) => {
        setTimeout(() => {
            if (contador === 10) {
                const respuestasCopy = [...respuestasUsuario];
                respuestasCopy.push(respueta);
                /* if (respuestasCorrectas[contador - 1] === respueta) {
                    sendCorrectAnswersToFirebase(`pregunta${contador}`);
                } else {
                    sendIncorrectAnswersToFirebase(`pregunta${contador}`);
                } */
                setRespuestasUsuario(respuestasCopy);
                if (JSON.stringify(respuestasCorrectas) === JSON.stringify(respuestasCopy)) {
                    //sendMessageToFirebase('Ganador');
                    setModalGanador(true);
                } else {
                    //sendMessageToFirebase('Perdedor');
                    setModalPerdedor(true);
                }
            } else if (contador < 10) {
                const respuestasCopy = [...respuestasUsuario];
                respuestasCopy.push(respueta);
                /* if (respuestasCorrectas[contador - 1] === respueta) {
                    sendCorrectAnswersToFirebase(`pregunta${contador}`);
                } else {
                    sendIncorrectAnswersToFirebase(`pregunta${contador}`);
                } */
                setRespuestasUsuario(respuestasCopy);
                setContador(prev => prev + 1);
                props.nextStep();
            }
        }, 250);
    }

    return (
        <div className="fondo">
            <img className="fondo-imagen" src={`/assets/fondo${props.numeroPregunta}.jpg`} alt="fondo" />
            <img className="pregunta" src={`/assets/pregunta${props.numeroPregunta}.png`} alt="imagen" />
            <div className="respuestas">
                <img onClick={() => {
                    setBtnPaloma('/assets/PALOMA-SELECCION.png')
                    handleOnRespuesta(true);
                    playSuccess();
                }}
                    className="botonImagen"
                    src={btnPaloma}
                    alt="verdadero" />
                <img onClick={() => {
                    setBtnX('/assets/X-SELECCION.png')
                    handleOnRespuesta(false)
                    playSuccess();
                }}
                    className="botonImagen"
                    src={btnX}
                    alt="falso" />
            </div>
            <img className="contador-imagen" src={`/assets/${props.numeroPregunta}_10.png`} alt="contador" />
        </div>
    )
}
