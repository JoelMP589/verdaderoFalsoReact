
import '../css/Instrucciones.css'
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { BancoContext } from '../context/BancoContext';

export const Perdiste = () => {
    const { modalPerdedor, setModalRespuestas } = useContext(BancoContext)
    return (
        <Modal
            open={modalPerdedor}
        >
            <div className="contenedor">
                <div className="contenedor-imagen">
                    <img src='assets/Modal2.png' alt="Perdiste" className="Modal-imagen" />
                    <div className="Modal-contenedor-botones">
                        <img src='assets/SLIDE12/verRespuestas.png' onClick={() => setModalRespuestas(true)} alt="verRespuestas" className="Modal-boton Modal-botones" />
                        <img src='assets/SLIDE12/regresar.png' alt="Regresar" className="Modal-boton Modal-botones" />
                    </div>
                </div>
            </div>
        </Modal>
    )
}
