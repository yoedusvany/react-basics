import React from 'react'
import ReactDOM from "react-dom";

export default function Portal() {
    return ReactDOM.createPortal(
        <h1>
           Portals demo
           Es util cuando hace falta poner algun elemento en una parte distinta al padre, por ejemplo una container que tiene un ancho de 400px
           si mostramos un modal dentro de ese container el modal como es un hijo tambien tendra como propiedad de ancho los 400 px, sin embargo con un portal podemos mostrarlo 
           usando un padre diferente. 
        </h1>,
        document.getElementById('portal-root')
    )
    
}
