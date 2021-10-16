import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { useUser } from '../context/userContext'

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
    

    return (
        <div className="mt-20">
            <h1 className="font-bold text-3xl">SISTEMA ADMINISTRADOR DE VENTAS</h1>
            <ul className="flex flex-col xl:flex-row justify-around items-center mt-10 rounded">
                <li className="mb-4">
                    <Link to ="/ListarProductos">
                    {
                        (!admin&&!vendedor)?
                        (<button className="elBoton botonGris">
                            <h3>GESTIÓN DE PRODUCTOS</h3>
                        </button>):
                        (admin)?
                        (<button className="elBoton">
                            <h3>GESTIÓN DE PRODUCTOS</h3>
                        </button>):
                        (<button className="elBoton botonGris">
                            <h3>GESTIÓN DE PRODUCTOS</h3>
                        </button>)
                    }
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="/ListarVentas">
                        {
                            (!admin&&!vendedor)?
                            (<button className="elBoton botonGris">
                                <h3>GESTIÓN DE VENTAS</h3>
                            </button>):
                            (admin)?
                            (
                                <button className="elBoton">
                                    <h3>GESTIÓN DE VENTAS</h3>
                                </button>
                            ):
                            (
                                <button className="elBoton">
                                    <h3>GESTIÓN DE VENTAS</h3>
                                </button>
                            )
                        }
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="/Usuarios">
                        {
                            (!admin&&!vendedor)?
                            (<button className="elBoton botonGris">
                                <h3>GESTIÓN DE USUARIOS</h3>
                            </button>):
                            (admin)?
                            (
                                <button className="elBoton">
                                    <h3>GESTIÓN DE USUARIOS</h3>
                                </button>
                            ):
                            <button className="elBoton botonGris">
                                <h3>GESTIÓN DE USUARIOS</h3>
                            </button>
                        } 
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Escritorio
