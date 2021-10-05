import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
//import usuarios from "../data/users";
import UsuariosServices from '../services/usuario.service'

let datosUsuarios;
async function getUsuarios(){
    const datos =await UsuariosServices.findAll();
    datosUsuarios = datos.data;
    return datos.data;
}
getUsuarios().then();

async function putUsuarios(){
    const datos = await UsuariosServices.update();
    datosUsuarios = datos.data;
    return datos.data;
}
putUsuarios().then();

const Usuarios = () =>{

    const [listaUsuarios,setListaUsuarios] = useState(true);
    const [dataUsers,setDataUsers] = useState([])
    const [indice,setIndice] = useState();

    useEffect(()=>{
        setDataUsers(datosUsuarios)
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
                    <Link to="/escritorio">
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
                                        <td>{e._id}</td>
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
                    <input className="w-52 mb-2" type="text" name="id" id="idencargado" placeholder={datosUsuarios[indice].id} value={id} disabled/>
                </label>
                <label htmlFor="nombre">
                    Nombre usuario
                    <input className="w-52 mb-2" type="text" name="nombre" id="nombree" placeholder={datosUsuarios[indice].nombre} value={nombre} onChange={handleNombre}/>
                </label>
                <label htmlFor="email">
                    Correo electrónico
                    <input className="w-52 mb-2" type="email" name="email" id="correoe" placeholder={datosUsuarios[indice].email} value={email} onChange={handleEmail}/>
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
            </form>
        </>
    )
}

export default Usuarios;