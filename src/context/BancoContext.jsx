import { createContext, useState } from 'react';
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyBPRp4xTpCcaUagaA5P_YBFsqyWc3_H-u0",
    authDomain: "realtimetest-54cdd.firebaseapp.com",
    projectId: "realtimetest-54cdd",
    storageBucket: "realtimetest-54cdd.appspot.com",
    messagingSenderId: "740465626710",
    appId: "1:740465626710:web:0a69deffa710515d4b35f7",
    measurementId: "G-L0KYEFY7F8"
})

const firestore = firebase.firestore();

export const BancoContext = createContext();

export const BancoProvider = ({ children }) => {
    const verdadOFalsoRef = firestore.collection("verdadOFalso");
    const [contador, setContador] = useState(1);
    const [modalInstrucciones, setModalInstrucciones] = useState(true);
    const [modalPerdedor, setModalPerdedor] = useState(false);
    const [modalGanador, setModalGanador] = useState(false)
    const [respuestasCorrectas] = useState(
        [true,
            false,
            true,
            false,
            false,
            true,
            false,
            false,
            true,
            false
        ])
    const [respuestasUsuario, setRespuestasUsuario] = useState([]);

    const sendMessageToFirebase = async (documento) => {
        const increment = firebase.firestore.FieldValue.increment(1);
        await verdadOFalsoRef.doc(documento).set({
            Total: increment
        },
            { merge: true });
    }

    return (
        <BancoContext.Provider value={{
            modalInstrucciones,
            modalPerdedor,
            modalGanador,
            respuestasCorrectas,
            respuestasUsuario,
            contador,
            setModalInstrucciones,
            setModalPerdedor,
            setModalGanador,
            setRespuestasUsuario,
            setContador,
            sendMessageToFirebase
        }}>
            {children}
        </BancoContext.Provider>
    )
}