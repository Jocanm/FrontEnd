import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { obtenerUsuarios,actualizarUsuario } from '../utils/apiUsuarios'
import { nanoid } from 'nanoid';
import ReactLoading from 'react-loading';
import PrivateComponent from '../components/PrivateComponent';

const Usuarios = () =>{

    const [listaUsuarios,setListaUsuarios] = useState(true);
    const [dataUsers,setDataUsers] = useState([])
    const [indice,setIndice] = useState();

    //Pagina de loading
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        
        const traerUsuarios = async()=>{
            setLoading(true)
            await obtenerUsuarios(
                (res)=>{
                    setDataUsers(res.data)
                    setLoading(false)
                },
                (err)=>{
                    console.error(err)
                    setLoading(false)
                })
        }
        traerUsuarios();

    },[listaUsuarios])

    return(
        <PrivateComponent roleList={"Administrador"}>
            {
                (listaUsuarios) ? (
                    <ListarUsuarios 
                    setListaUsuarios={setListaUsuarios} 
                    setIndice={setIndice} 
                    dataUsers={dataUsers}
                    loading={loading}
                    ></ListarUsuarios>
                ):<ActualizarDatosUsuario setListaUsuarios={setListaUsuarios} indice={indice} dataUsers={dataUsers} setDataUsers={setDataUsers}/>
            }
            <ToastContainer position="top-center" autoClose={3000}/>
        </PrivateComponent>
        
    )
}

const ListarUsuarios = ({setListaUsuarios,setIndice,dataUsers,loading}) => {

    const [busqueda,setBusqueda] = useState("");
    const [filtrados,setFiltrados] = useState(dataUsers)

    useEffect(()=>{
        setFiltrados(dataUsers.filter((e)=>{
            return JSON.stringify(e).toLowerCase().includes(busqueda.toLowerCase())
        }))
    },[busqueda,dataUsers])

    return (
        <>
            <h1 className="text-2xl">GESTIÓN DE USUARIOS</h1>
            <div className="bg-red">
                <form>
                    <div className="mb-8 mt-4 flex justify-between">
                    <input type="text" name="buscar" id="buscar" placeholder=" Buscar"
                    value={busqueda}
                    onChange={(e)=>setBusqueda(e.target.value)}
                    />
                    <Link to="/">
                            <button class="buttonIco right botonuser"><i class="fas fa-home"></i></button>
                    </Link>
                    </div>
                    {
                        (loading)?
                        (<div className="flex flex-col justify-center items-center"><ReactLoading type="spin" color="#1c4d6e" height={64} width={64} /></div>):
                        (<table className="table tablas" id="tabla">
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
                            {filtrados.map((e,i) => {
                                return (
                                    <tr key={nanoid()}>
                                        <td>{e._id.slice(17)}</td>
                                        <td>{e.name}</td>
                                        <td>{e.estado}</td>
                                        <td>{e.rol}</td>
                                        <td>{e.email}</td>
                                        <td>
                                            <button onClick={()=>{
                                                // setIndice(i)
                                                setListaUsuarios(e=>!e);
                                                setIndice((indice)=>{
                                                    dataUsers.forEach((el,i)=>{
                                                        if(el._id === e._id) indice = i;
                                                    })
                                                    return indice;
                                                });
                                            }} class="buttonIco">
                                                <i class="fas fa-search"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>)
                    }
                    
                </form>
                </div>
        </>
    );
};

const ActualizarDatosUsuario = ({setListaUsuarios,indice,dataUsers}) => {

    const [name,setNombre] = useState(dataUsers[indice].name) 
    const [_id,setId] = useState(dataUsers[indice]._id)
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

    const handleSubmit = async(e) => {
        e.preventDefault();

        const nuevosDatos = {name,estado,rol,email}

        if(estado !== "Autorizado"){
            if(rol === "Vendedor" || rol === "Administrador"){
                toast.warn(`Si desea asignar un rol debe cambiar el estado a Autorizado!`)
            }else{
                await actualizarUsuario(_id,nuevosDatos,
                    (res)=>{
                        console.log(res.data)
                        toast.success(`El usuario "${_id.slice(17)} - ${nuevosDatos.name}" ha sido Actualizado`)
                    },
                    (err)=>{console.error(err)})
                    setListaUsuarios(e=>!e)
            }
        }else{
            await actualizarUsuario(_id,nuevosDatos,
                (res)=>{
                    console.log(res.data)
                    toast.success(`El usuario "${_id.slice(17)} - ${nuevosDatos.name}" ha sido Actualizado`)
                },
                (err)=>{console.error(err)})
                setListaUsuarios(e=>!e)
        }
    }

    const handleBack = () =>{
        setListaUsuarios(e=>!e)
    }
    
    return(
        <>
            <h1 className="text-2">ACTUALIZAR DATOS DEL USUARIO</h1>

            <form onSubmit={handleSubmit} className='w-96 h-auto flex flex-col items-center'>

                <button onClick={handleBack} className="boton-usuario mb-4 font-bold">Atras</button>   

                <label htmlFor="id">
                    ID usuario
                    <input className="w-52 mb-2 border-2 border-black" type="text" name="_id" id="idencargado" placeholder={dataUsers[indice].id} value={_id.slice(17)} disabled/>
                </label>
                <label htmlFor="name">
                    Nombre usuario
                    <input className="w-52 mb-2" type="text" name="name" id="namee" placeholder={dataUsers[indice].name} value={name} onChange={handleNombre}/>
                </label>
                <label htmlFor="email">
                    Correo electrónico
                    <input className="w-52 mb-2 border-2 border-black" type="email" name="email" id="correoe" placeholder={dataUsers[indice].email} value={email} onChange={handleEmail} disabled/>
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
                            <option>Sin rol</option>
                        </select>
                    </div>
                </label>

                <button className="button1 mt-4 font-bold" type="submit" name="guardarUsuario">Guardar</button>
            </form>
        </>
    )
}

export default Usuarios;