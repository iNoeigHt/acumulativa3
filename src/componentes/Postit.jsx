import React from "react";
import '../estilos/postit.css';
import { AiOutlineClose } from "react-icons/ai";

export function Post({id, titulo, descripcion, importante, eliminarPost}) {

    const PostTitulo = titulo;
    const PostDescrip = descripcion;

    if(importante) {
        return (
            <div className="contenedorImportante">
                <div className="post">
                    <h1 className="tituloPost">{PostTitulo}</h1> 
                    <p className="descripcionPost">{PostDescrip}</p>
                    <div 
                        className="icono-eliminar"
                        onClick={() => eliminarPost(id)}>
                        <AiOutlineClose />
                    </div>
                </div> 
            </div>
    )
    }
    else {
        return (
            <div className="contenedor">
                <div className="post">
                    <h1 className="tituloPost">{PostTitulo}</h1> 
                    <p className="descripcionPost">{PostDescrip}</p>
                    <div 
                        className="icono-eliminar"
                        onClick={() => eliminarPost(id)}>
                        <AiOutlineClose />
                    </div>
                </div> 
            </div>
        )
    }
}
