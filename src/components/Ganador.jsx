import '../css/Instrucciones.css'
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { BancoContext } from '../context/BancoContext';

export const Ganador = () => {

    const { modalGanador } = useContext(BancoContext)
    return (
        <Modal
            open={modalGanador}
        >
            <div className="contenedor">
                <img src='assets/Modal3.png' alt="Ganador" className="Modal-imagen" />
                <img onClick={() => { }} src='/assets/SLIDE13/Cerrar.png' alt="Cerrar" className="Modal-boton-cerrar" />
            </div>
        </Modal>
    )
}
