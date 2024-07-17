import React from "react";
import '../estilos/postit.css';

function Post(titulo, descripcion, importante, eliminarPost) {

    return (
            <div className={importante ? 'contenedor importante' : 'contenedor'}>
                <div className="post">
                    <h1 className="tituloPost">{titulo}</h1> 
                    <p className="descripcionPost">{descripcion}</p>
                    <button onClick={() => eliminarPost()} className="botonPost">X</button>
                </div> 
            </div>
    )
}

export default Post;