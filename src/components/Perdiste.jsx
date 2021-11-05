
import '../css/Instrucciones.css'
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { BancoContext } from '../context/BancoContext';

export const Perdiste = () => {
    const { modalPerdedor } = useContext(BancoContext)
    return (
        <Modal
            open={modalPerdedor}
        >
            <div className="contenedor">
                <img src='assets/Modal2.png' alt="Perdiste" className="Modal-imagen" />
                <div className="Modal-botones">
                    <img src='assets/SLIDE12/verRespuestas.png' alt="verRespuestas" className="Modal-boton" />
                    <img src='assets/SLIDE12/regresar.png' alt="Regresar" className="Modal-boton" />
                </div>
            </div>
        </Modal>
    )
}
