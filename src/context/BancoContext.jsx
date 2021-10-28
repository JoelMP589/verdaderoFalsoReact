import { createContext, useState } from 'react';

export const BancoContext = createContext();

export const BancoProvider = ({ children }) => {
    const [contador, setContador] = useState(1);
    const [Acciones] = useState(
        ["Se debe negar a participar en discusiones con empresas competidoras sobre algún aspecto relativo a precios.",
            "Es muy recomendable utilizar terceros autorizados o despachos para intercambiar información con competidores.",
            "Es correcto reportar al interior de la compañía, el intento de sus competidores para discutir sobre acuerdos de precios.",
            "Es recomendable discutir con un competidor los planes de marketing, estratégicos o de lanzamiento de productos.",
            "Es viable intercambiar información relacionada a una licitación con competidores u otros postores.",
            "Tener un programa de Compliance efectivo puede reducir las sanciones.",
            "El hecho de haber sido sancionado por la comisión federal de competencia económica me exime de ser sancionado por otros entes gubernamentales.",
            "Es válido recibir por parte de servidores públicos datos que no son de dominio público respecto a competidores.",
            "Ante la imposición de una sanción o inicio de un proceso de investigación por parte de una entidad gubernamental es recomendable dar aviso a las empresas transnacionales con las que trabaja.",
            "El incumplimiento y la imposición de sanciones impuestas por autoridades tales como la SFP comprende exclusivamente a actos de corrupción."
        ]);
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

    return (
        <BancoContext.Provider value={{
            Acciones,
            respuestasCorrectas,
            respuestasUsuario,
            contador,
            setRespuestasUsuario,
            setContador
        }}>
            {children}
        </BancoContext.Provider>
    )
}