import React from 'react';
import '../estilos/Form.css';
import { Post } from './Postit';
import { useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';

export function FormPost() {

    const tituloRef = useRef();
    const descripcionRef = useRef();
    const importanteRef = useRef();
    const [mensaje, setMensaje] = useState('');

    const [postList, setPostList] = useState([
       ]);

    function addPost(e) {

        const titulo = tituloRef.current.value;
        const descripcion = descripcionRef.current.value;
        const importante = importanteRef.current.checked;

        if(descripcion.trim() === ''){
            setMensaje(() => 'Descripcion obligatoria');

            e.preventDefault();

            setTimeout(() => {
                setMensaje(() => '');
            }, 3000);

            return
        }

        const newPost = {
            id: uuid(), 
            titulo: titulo,
            descripcion: descripcion,
            importante: importante
        }

        e.preventDefault();
        const newPostList = [...postList, newPost];
        setPostList(newPostList);

        alert("se agrego el Post");
    }

    const eliminarPost = id => {
        const newPostList = postList.filter(nota => nota.id !== id);
        setPostList(newPostList);

        alert("se elimino el Post")
    }

    return (
        <div className="container">
            <h1 className='tituloPrincipal'>Post It Simulator!</h1>
            <div>
                <form>
                    <input ref={tituloRef} className="inputs" placeholder="Titulo" type="text" id="titulo"/>
                    <input ref={descripcionRef} className="inputs" placeholder="Descripcion" type="text" id="descripcion"/>
                    <div className="mensaje">
                        {mensaje}
                    </div>
                    <label className='check'>
                        <input ref={importanteRef} className="inputs" type="checkbox" id="importante" /> Importante!
                    </label>
                    <button onClick={addPost} id="boton_agregar">AGREGAR</button>
                </form>
            </div>
            <div className="block_notas">
                {
                    postList.map(nota => <Post id={nota.id} titulo={nota.titulo} descripcion={nota.descripcion} importante={nota.importante} key={nota.id} eliminarPost={eliminarPost}/>)
                }
            </div>
        </div>
    )
}
