import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import usuarios from "../data/users";


const Usuarios = () =>{

    const [listaUsuarios,setListaUsuarios] = useState(true);
    const [dataUsers,setDataUsers] = useState([])
    const [indice,setIndice] = useState();

    useEffect(()=>{
        setDataUsers(usuarios)
    },[])

    return(
        <div>
            {
                (listaUsuarios) ? (
                    <ListarUsuarios setListaUsuarios={setListaUsuarios} setIndice={setIndice} dataUsers={dataUsers}></ListarUsuarios>
                ):<ActualizarDatosUsuario setListaUsuarios={setListaUsuarios} indice={indice} dataUsers={dataUsers} setDataUsers={setDataUsers}/>
            }
            <ToastContainer position="top-center" autoClose={3000}/>
        </div>
        
    )
}

const ListarUsuarios = ({setListaUsuarios,setIndice,dataUsers}) => {


    return (
        <>
            <h1 className="text-2xl">GESTIÓN DE USUARIOS</h1>
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
                            {dataUsers.map((e,i) => {
                                return (
                                    <tr>
                                        <td>{e.id}</td>
                                        <td>{e.nombre}</td>
                                        <td>{e.estado}</td>
                                        <td>{e.rol}</td>
                                        <td>{e.email}</td>
                                        <td>
                                            <button onClick={()=>{
                                                setListaUsuarios(e=>!e);
                                                setIndice(i);
                                            }} class="buttonIco">
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

const ActualizarDatosUsuario = ({setListaUsuarios,indice,dataUsers,setDataUsers}) => {

    const [nombre,setNombre] = useState(dataUsers[indice].nombre) 
    const [id,setId] = useState(dataUsers[indice].id)
    const [estado,setEstado] = useState(dataUsers[indice].estado)
    const [rol,setRol] = useState(dataUsers[indice].rol)
    const [email,setEmail] = useState(dataUsers[indice].email)

    const handleNombre = (e) =>{
        setNombre(e.target.value)
    }
    const handleEstado = (e) =>{
        setEstado(e.target.value)
    }
    const handleRol = (e) =>{
        setRol(e.target.value)
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const nuevosDatos = {nombre,id,estado,rol,email}
        setDataUsers(e=>{
            e[indice] = nuevosDatos;
            return e;
        })
        toast.success(`El usuario "${nuevosDatos.id} - ${nuevosDatos.nombre}" ha sido Actualizado`)
        setListaUsuarios(e=>!e)
    }

    const handleBack = () =>{
        setListaUsuarios(e=>!e)
    }
    
    return(
        <>
            <h1 className="text-2">ACTUALIZAR DATOS DEL USUARIO</h1>

            <form onSubmit={handleSubmit} className='w-96 h-auto flex flex-col items-center'>

                <button onClick={handleBack} className="boton-usuario mb-4">Atras</button>   

                <label htmlFor="id">
                    ID usuario
                    <input className="w-52 mb-2" type="text" name="id" id="idencargado" placeholder={usuarios[indice].id} value={id} disabled/>
                </label>
                <label htmlFor="nombre">
                    Nombre usuario
                    <input className="w-52 mb-2" type="text" name="nombre" id="nombree" placeholder={usuarios[indice].nombre} value={nombre} onChange={handleNombre}/>
                </label>
                <label htmlFor="email">
                    Correo electrónico
                    <input className="w-52 mb-2" type="email" name="email" id="correoe" placeholder={usuarios[indice].email} value={email} onChange={handleEmail}/>
                </label>
                <label htmlFor="estado">
                    Estado usuario
                    <div className="content-select mb-2">
                        <select className="w-52" name="estado" value={estado} onChange={handleEstado}>
                            <option>Pendiente</option>
                            <option>Autorizado</option>  
                            <option>No autorizado</option>
                        </select>
                    </div>
                </label>
                <label htmlFor="rol">
                    Rol usuario
                    <div className="content-select">
                        <select className="w-52" name="rol" id="" value={rol} onChange={handleRol}>
                            <option>Administrador</option>
                            <option>Vendedor</option>  
                        </select>
                    </div>
                </label>

                <button className="button1 mt-4" type="submit" name="guardarUsuario">Guardar</button>

                {/* <ul className="lista-usuarios flex flex-col items-center justify-center">

                    <li className="mb-3">
                            <button onClick={handleBack} className="boton-usuario">Atras</button>
                    </li>

                    <li>
                        <input className="w-52" type="text" name="idencargado" id="idencargado" placeholder={usuarios[indice].id} disabled/>
                    </li>
                    <li>
                        <input className="w-52" type="text" name="nombreencargado" id="nombree" placeholder={usuarios[indice].nombre} />
                    </li>
                    <li>
                    <input className="w-52" type="email" name="correoencargado" id="correoe" placeholder={usuarios[indice].email} />
                    </li>
                    <li>
                        <div className="content-select">
                        <select className="w-52" name="" id="">
                            <option value="0">{usuarios[indice].estado}</option>
                            <option value="1">Pendiente</option>
                            <option value="2">Autorizado</option>  
                            <option value="3">No autorizado</option>
                        </select>
                        </div>
                    </li>
                    <li>
                        <div className="content-select">
                        <select className="w-52" name="" id="" defaultValue={usuarios[indice].rol}>
                            <option value="0">{usuarios[indice].rol}</option>
                            <option value="1">Administrador</option>
                            <option value="2">Vendedor</option>  
                        </select>
                        </div>
                    </li>
                    <li className="mt-3">
                        <button className="button1" type="submit" name="guardarUsuario" onClick={handleSubmit}>Guardar</button>
                    </li>                          
                </ul> */}
            </form>
        </>
    )
}
export default Usuarios;