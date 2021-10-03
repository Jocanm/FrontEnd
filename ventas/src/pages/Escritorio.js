import React from 'react'
import {Link} from "react-router-dom"

const Escritorio = () => {
    return (
        <div className="mt-28">
            <h1 className="font-bold text-2xl">SISTEMA ADMINISTRADOR DE VENTAS</h1>
            <ul className="flex justify-around items-center mt-10">
                <li>
                <Link to='/ListarProductos'>
                    <button className="button px-10 font-bold" type="submit" name="gproductos"><h3>GESTIÓN DE PRODUCTOS</h3></button>
                </Link>
                </li>
                <li>
                <Link to="/ListarVentas">
                    <button className="button px-10 font-bold" type="submit" name="gventa"><h3>GESTIÓN DE VENTAS</h3></button>
                </Link>
                </li>
                <li>
                <Link to='/Usuarios'>
                    <button className="button px-10 font-bold" type="submit" name="gusuarios"><h3>GESTIÓN DE USUARIOS</h3></button>
                </Link>    
                </li>
            </ul>
        </div>
    )
}

export default Escritorio
