import { useState } from 'react';
import React from 'react';
import './app.css';
import Post from './componentes/Postit';

function App() {

    const [posts, setPosts] = useState([]);

    return (
        <div className="container">
            <h1>Post It Simulator!</h1>
            <div className="form">
                <input className="inputs" type="text" id="titulo" placeHolder="Titulo" />
                <input className="inputs" type="text" id="descripcion" placeHolder="Descripcion" />
                <label>
                    <input className="inputs" type="checkbox" id="importante" /> Importante!
                </label>
                <button id="boton_agregar">AGREGAR</button>
            </div>
            <div className="block_notas">
                {
                    posts.map((nota) =>
                        <Post 
                            titulo={nota.titulo}
                            descripcion={nota.descripcion}
                            importante={nota.importante}
                        />
                )
                }
            </div>
        </div>
    )
}

export default App;