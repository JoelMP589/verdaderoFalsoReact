import { useContext, useState } from "react"
import { BancoContext } from "../context/BancoContext";
import '../css/Preguntas.css'


export const Preguntas = (props) => {
    const {
        respuestasUsuario, setRespuestasUsuario, contador, setContador, respuestasCorrectas,
        setModalGanador, setModalPerdedor, sendMessageToFirebase } = useContext(BancoContext);
    const [btnPaloma, setBtnPaloma] = useState('/assets/PALOMA.png')
    const [btnX, setBtnX] = useState('/assets/X.png')

    const handleOnRespuesta = (respueta) => {
        setTimeout(() => {
            if (contador === 10) {
                const respuestasCopy = [...respuestasUsuario];
                respuestasCopy.push(respueta);
                setRespuestasUsuario(respuestasCopy);
                if (JSON.stringify(respuestasCorrectas) === JSON.stringify(respuestasCopy)) {
                    sendMessageToFirebase('Ganador');
                    setModalGanador(true);
                } else {
                    sendMessageToFirebase('Perdedor');
                    setModalPerdedor(true);
                }
            } else if (contador < 10) {
                const respuestasCopy = [...respuestasUsuario];
                respuestasCopy.push(respueta);
                console.log(respuestasCopy + contador);
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
                }}
                    className="botonImagen"
                    src={btnPaloma}
                    alt="verdadero" />
                <img onClick={() => {
                    setBtnX('/assets/X-SELECCION.png')
                    handleOnRespuesta(false)
                }}
                    className="botonImagen"
                    src={btnX}
                    alt="falso" />
            </div>
            <img className="contador-imagen" src={`/assets/${props.numeroPregunta}_10.png`} alt="contador" />
        </div>
    )
}
