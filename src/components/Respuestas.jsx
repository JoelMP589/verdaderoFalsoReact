import '../css/Instrucciones.css'
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { BancoContext } from '../context/BancoContext';

export const Respuestas = () => {

    const { modalRespuestas, setModalRespuestas } = useContext(BancoContext)
    return (
        <Modal
            open={modalRespuestas}
        >
            <div className="contenedor">
                <div className="contenedor-imagen">
                    <img src='assets/Modal4.png' alt="respuestas" className="Modal-imagen" />
                    <img onClick={() => { setModalRespuestas(false) }} src='/assets/SLIDE13/Cerrar.png' alt="Cerrar" className="Modal-boton" />
                </div>
            </div>
        </Modal>
    )
}
