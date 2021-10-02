import React from 'react'
import {Link} from "react-router-dom"
import productos from '../data/productos'
import { useState, useEffect } from 'react'


const ListarProductos = () => {

    const [dataProduct,setDataProduct] = useState([])

    useEffect(()=>{
        setDataProduct(productos)
    },[])

    return (
        <div>
            <h1>GESTIÓN DE PRODUCTOS</h1>
            <Listar data={dataProduct}/>
        </div>
    )
}

const Listar = ({data}) =>{

    return(
        <form>
            <div className="flex flex-col">
                <div className="">
                    <Link to="/">
                        <button class="buttonIco right"><i class="fas fa-home"></i></button> 
                    </Link>
                </div>
                <div className="flex justify-between mt-2">
                    <label className="flex" htmlFor="buscar">
                        <input className="mr-2" type ="text" name="buscar" id="buscar" placeholder="buscar por id"/>
                        <button class="buttonIco" type="submit"><i class="fas fa-search"></i></button>
                    </label>
                    <button className="button1 right p-6" type="submit" name="nuevoproducto">Nuevo Producto</button>
                </div>
                <table className="mt-4">
                    <thead>
                        <th>ID producto</th>
                        <th>Descripción</th>
                        <th>Valor</th>
                        <th>Estado</th>
                    </thead>
                    <tbody>
                        {
                            data.map((e,i)=>{
                                return(
                                    <tr>
                                        <td>{e.id}</td>
                                        <td>{e.descripcion}</td>
                                        <td>{e.valor}</td>
                                        <td>{e.estado}</td>
                                        <td>
                                            <button class="buttonIco mr-1">
                                                <i class="fas fa-search"></i>
                                            </button>
                                            <button class="buttonIco" type="button"><i class="fas fa-minus-circle"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </form>
    )
}

const Actualizar = () =>{

    return (
        <div></div>
    )
}

const crear = () =>{

    return (
        <div></div>
    )
}

export default ListarProductos
