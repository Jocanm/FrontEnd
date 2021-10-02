import React from "react";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import usuarios from "../data/users";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const Usuarios = () =>{

    const [listaUsuarios,setListaUsuarios] = useState(true);

    return(
        (listaUsuarios) ? (
            <ListarUsuarios setListaUsuarios={setListaUsuarios}></ListarUsuarios>
        ):<ActualizarDatosUsuario setListaUsuarios={setListaUsuarios}/>
    )
}

const ListarUsuarios = ({setListaUsuarios}) => {

    const [lista,setLista] = useState(usuarios)
    const handleSubimit = () =>{
        setListaUsuarios(e=>!e)
    }

    return (
        <>
            <h1>GESTIÓN DE USUARIOS</h1>
            <div className="bg-red">
                <form>
                    <div className="mb-8">
                    <input type="text" name="buscar" id="buscar" placeholder="buscar por id"/>
                    <button class="buttonIco" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                    <Link to="/">
                            <button class="buttonIco right botonuser"><i class="fas fa-home"></i></button>
                    </Link>
                    </div>
                    <table class="table" id="tabla">
                        <thead>
                            <tr>
                                <th>ID usuario</th>
                                <th>Nombre</th>
                                <th>Estado</th>
                                <th>Rol</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista.map((e,i) => {
                                return (
                                    <tr>
                                        <td>{e.id}</td>
                                        <td>{e.nombre}</td>
                                        <td>{e.estado}</td>
                                        <td>{e.rol}</td>
                                        <td>{e.email}</td>
                                        <td>
                                            <button onClick={handleSubimit} class="buttonIco">
                                                <i class="fas fa-search"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </form>
                </div>
        </>
    );
};

const ActualizarDatosUsuario = ({setListaUsuarios}) => {

    const handleSubmit = () => {
        setListaUsuarios(e=>!e)
        alert("Datos guardados con exito")
    }

    const handleBack = () =>{
        setListaUsuarios(e=>!e)
    }
    

    return(
        <>
            <h1>ACTUALIZAR DATOS DEL USUARIO</h1>

            <form className='w-96 h-auto'>

                <ul className="lista-usuarios flex flex-col items-center justify-center">

                    <li className="mb-3">
                            <button onClick={handleBack} className="boton-usuario">Atras</button>
                    </li>

                    <li>
                        <input className="w-52" type="text" name="idencargado" id="idencargado" placeholder={usuarios[0].id} disabled/>
                    </li>
                    <li>
                        <input className="w-52" type="text" name="nombreencargado" id="nombree" placeholder={usuarios[0].nombre} />
                    </li>
                    <li>
                    <input className="w-52" type="email" name="correoencargado" id="correoe" placeholder={usuarios[0].email} />
                    </li>
                    <li>
                        <div className="content-select">
                        <select className="w-52" name="" id="">
                            <option value="1">Pendiente</option>
                            <option value="2">Autorizado</option>  
                            <option value="3">No autorizado</option>
                        </select>
                        </div>
                    </li>
                    <li>
                        <div className="content-select">
                        <select className="w-52" name="" id="">
                            <option value="1">Administrador</option>
                            <option value="2">Vendedor</option>  
                        </select>
                        </div>
                    </li>
                    <li className="mt-3">
                        <button className="button1" type="submit" name="guardarUsuario" onClick={handleSubmit}>Guardar</button>
                    </li>                          
                </ul>
            </form>
        </>
    )
}

// const UserData = ({indice,mostrar}) =>{

//     const [show, setShow] = useState(true);
//     const handleClose = () => setShow(false);
    
//     useEffect(()=>{
//         setShow(!show)
//     },[mostrar])

//     return(
//         <>
//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>
//                         <div className="">
//                             {`Datos de ${usuarios[indice].nombre}`}
//                         </div>
//                         </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <div>
//                         <hr />
//                         <div>
//                             <input type="text" />
//                             <input type="text" />
//                             <input type="text" />
//                             <select name="" id="">
//                                 <option value=""></option>
//                                 <option value=""></option>
//                             </select>
//                         </div>
//                     </div>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Cerrar
//                     </Button>
//                     <Button class="button1" variant="primary" onClick={handleClose}>
//                         Guardar
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     )
// }
export default Usuarios;