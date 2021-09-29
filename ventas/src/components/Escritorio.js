import React from 'react'
import {Link} from "react-router-dom"

const Escritorio = () => {
    return (
        <div>
            <br></br><br></br><br></br><br></br>
            <h1>SISTEMA ADMINISTRADOR DE VENTAS</h1>
            <br></br><br></br><br></br><br></br>
            <ul class="menu">
                <li><button class="button" type="submit" name="gproductos"><h3>GESTIÓN DE PRODUCTOS</h3></button></li>
                <li>
                <Link to="/ListarVentas">
                    <button class="button" type="submit" name="gventa"><h3>GESTIÓN DE VENTAS</h3></button>
                </Link></li>
                <Link to='/ListaUsuarios'>
                    <li><button class="button" type="submit" name="gusuarios"><h3>GESTIÓN DE USUARIOS</h3></button></li>
                </Link>
            </ul>
            <br></br><br></br><br></br><br></br>
        </div>
    )
}

export default Escritorio
