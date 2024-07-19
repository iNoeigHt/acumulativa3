import React from 'react';
import '..estilos/Form.css';
import { Post } from './Postit';
import { useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';

export function FormPost() {

    const [postList, setPostList] = useState([
        {id:uuid(), titulo: 'Tarea 1', descripcion: 'descripcion 1', importante: true},
        {id:uuid(), titulo: 'Tarea 2', descripcion: 'descripcion 2', importante: false},
        {id:uuid(), titulo: 'Tarea 3', descripcion: 'descripcion 3', importante: true},
        {id:uuid(), titulo: 'Tarea 4', descripcion: 'descripcion 4', importante: false},
        {id:uuid(), titulo: 'Tarea 5', descripcion: 'descripcion 5', importante: true}]);

    const tituloRef = useRef();
    const descripcionRef = useRef();
    const importanteRef = useRef();

    function addPost() {

        const titulo = tituloRef.current.value;
        const descripcion = descripcionRef.current.value;
        const importante = importanteRef.current.checked;

        if(importante.trim() === ''){
            console.log('campos vacios');
            return
            }
            

        setPostList(() => {

            const newPost = {
                id:uuid(), 
                titulo:titulo,
                descripcion:descripcion,
                importante:importante
            }

            const newPostList = [...postList, newPost];
            return newPostList;
        });
    }

    const eliminarPost = id => {
        const newPostList = postList.filter(nota => nota.id !== id);
        setPostList(newPostList);
    }

    return (
        <div className="container">
            <h1>Post It Simulator!</h1>
            <div>
                <form onSubmit={agregarPost}>
                    <input ref={tituloRef} className="inputs" type="text" id="titulo" placeHolder="Titulo"/>
                    <input ref={descripcionRef} className="inputs" type="text" id="descripcion" placeHolder="Descripcion"/>
                    <label>
                        <input ref={importanteRef} className="inputs" type="checkbox" id="importante" /> Importante!
                    </label>
                    <button onClick={addPost} id="boton_agregar">AGREGAR</button>
                </form>
            </div>
            <div className="block_notas">
                {
                    postList.map(nota => <Post titulo={nota.titulo} descripcion={nota.descripcion} importante={nota.importante} key={nota.id} eliminarPost={eliminarPost}/>)
                }
            </div>
        </div>
    )
}
