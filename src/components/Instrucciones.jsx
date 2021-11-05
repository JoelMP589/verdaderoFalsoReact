import '../css/Instrucciones.css'
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { BancoContext } from '../context/BancoContext';

export const Instrucciones = () => {

    const { modalInstrucciones, setModalInstrucciones } = useContext(BancoContext)

    return (
        <Modal
            open={modalInstrucciones}
        >
            <div className="contenedor">
                <img src='assets/Modal.png' alt="instrucciones" className="Modal-imagen" />
                <img onClick={() => setModalInstrucciones(false)} src='/assets/SLIDE1/boton-comenzar.png' alt="Comenzar" className="Modal-boton" />
            </div>
        </Modal >
    )
}
