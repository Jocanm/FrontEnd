import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { useUser } from '../context/userContext'
import { ToastContainer, toast } from 'react-toastify';
// import { obtenerDatosUsuarios } from '../utils/apiUsuarios';


const Escritorio = () => {

    const {userData} = useUser();

    const [admin,setAdmin] = useState(false)
    const [vendedor,setVendedor] = useState(false)
    // const [userData,setUserData] = useState({})

    useEffect(()=>{
        if(userData.rol === "Administrador"){
            setAdmin(true)
        }else if(userData.rol ==="Vendedor"){
            setVendedor(true)
        }
        // console.log(userData)
    },[userData])
    

    const alerta = () =>{
        toast.warn("No tiene permisos para ingresar al modulo")
    }

    return (
        <div className="mt-20">
            <h1 className="font-bold text-2xl">SISTEMA ADMINISTRADOR DE VENTAS</h1>
            <ul className="flex flex-col xl:flex-row justify-around items-center mt-10 rounded">
                <li className="mb-4">
                    {
                        (!admin&&!vendedor)?
                        (<button className="elBoton botonGris" onClick = {alerta}>
                            <h3>GESTIÓN DE PRODUCTOS</h3>
                        </button>):
                        (admin)?
                        (<Link to="/Listarproductos">
                            <button className="elBoton">
                                <h3>GESTIÓN DE PRODUCTOS</h3>
                            </button>
                        </Link>):
                        (<button className="elBoton botonGris" onClick = {alerta}>
                            <h3>GESTIÓN DE PRODUCTOS</h3>
                        </button>)
                    }
                </li>
                <li className="mb-4">
                    {
                        (!admin&&!vendedor)?
                        (<button className="elBoton botonGris" onClick = {alerta}>
                            <h3>GESTIÓN DE VENTAS</h3>
                        </button>):
                        (admin)?
                        (<Link to="/ListarVentas">
                            <button className="elBoton">
                                <h3>GESTIÓN DE VENTAS</h3>
                            </button>
                        </Link>):
                        (<Link to="/ListarVentas">
                            <button className="elBoton">
                                <h3>GESTIÓN DE VENTAS</h3>
                            </button>
                        </Link>)
                    }
                </li>
                <li className="mb-4">
                    {
                        (!admin&&!vendedor)?
                        (<button className="elBoton botonGris" onClick = {alerta} >
                            <h3>GESTIÓN DE USUARIOS</h3>
                        </button>):
                        (admin)?
                        (<Link to ="/Usuarios">
                            <button className="elBoton">
                                <h3>GESTIÓN DE USUARIOS</h3>
                            </button>
                        </Link>):
                        <button className="elBoton botonGris" onClick = {alerta}>
                            <h3>GESTIÓN DE USUARIOS</h3>
                        </button>
                    } 
                </li>
            </ul>
            <ToastContainer position="top-center" autoClose={1500}/>
        </div>
    )
}

export default Escritorio
