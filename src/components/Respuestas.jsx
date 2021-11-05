//import { useContext } from 'react'
import Modal from '@mui/material/Modal';
import '../css/Respuestas.css'
//import { BancoContext } from '../context/BancoContext';


export const Respuestas = ({ open, handleClose }) => {
    //const { Acciones, respuestasCorrectas, } = useContext(BancoContext);
    return (
        <Modal
            open={open}
        >
            <div className="container-table">
                <div className="table-header">Accion</div>
                <div className="table-header">Respuesta correcta</div>
                {/* {Acciones.map((accion, index) => {
                    return (
                        <>
                            <div className="table-item" key={index}>{accion}</div>
                            <div className={respuestasCorrectas[index] ? "table-item-true" : "table-item-false"} key={index}>{respuestasCorrectas[index] ? 'verdadero' : 'falso'}</div>
                        </>
                    )
                })} */}
                <div className="contenedor-boton">
                    <button onClick={handleClose} className="boton">Cerrar</button>
                </div>
            </div>

        </Modal>
    )
}
