import React from "react";
import '../estilos/postit.css';

export function Post({titulo, descripcion, importante, eliminarPost}) {

    const PostTitulo = titulo;
    const PostDescrip = descripcion;
    const PostImp = importante;

    if(importante) {
        return (
            <div className="contenedor">
                <div className="post">
                    <h1 className="tituloPost"></h1> 
                    <p className="descripcionPost"></p>
                    <button onClick={eliminarPost} className="botonPost">X</button>
                </div> 
            </div>
        )
    }

    else {
        return (
            <div className="contenedorImportante">
                <div className="post">
                    <h1 className="tituloPost"></h1> 
                    <p className="descripcionPost"></p>
                    <button onClick={eliminarPost} className="botonImp">X</button>
                </div> 
            </div>
    )
    }
}
