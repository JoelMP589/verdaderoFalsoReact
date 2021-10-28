import React from 'react'
import '../css/Contenedor.css'

export const Contenedor = ({ children }) => {
    return (
        <div className="contenedor">
            <div className="contenido">
                {children}
            </div>
        </div>
    )
}
