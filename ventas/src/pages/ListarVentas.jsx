import {Link} from "react-router-dom"
import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ventas from '../data/ventas'

const Ventas = () => {

    //Añade la base de datos a un estado
    const [dataVentas,setDataVentas] = useState([])

    //Me permite controlar la renderización condicional
    const [verVentas,setVerVentas] = useState(true)
    const [verCrearVentas,setVerCrearVentas] = useState(false)

    //Para la pagina de actualizar los datos
    const [indice,setIndice] = useState()


    useEffect(()=>{
        setDataVentas(ventas)
    },[])

    return (
        <div>
            {
            (verVentas)?
                (<ListarVentas 
                dataVentas={dataVentas}
                setVerCrearVentas={setVerCrearVentas}
                setVerVentas={setVerVentas}
                setIndice={setIndice}
                />):
            (verCrearVentas)?<CrearVenta/>:<ActualizarVenta/>
            }

        </div>
    )
}

const ListarVentas = ({dataVentas,setIndice,setVerCrearVentas,setVerVentas}) =>{

    
    return (
        <div>
            <h1 className="text-2xl">GESTIÓN DE VENTAS</h1>
            <form action="">
            <div className="flex flex-col">
                <div>
                    <Link to="/">
                        <button class="buttonIco right"><i class="fas fa-home"></i></button>
                    </Link>
                </div>
                <div className="flex justify-between mt-2">
                    <label className="flex" htmlFor="buscar">
                        <input type ="text" name="buscar" id="buscar" placeholder="buscar por id"/>
                        <button className="buttonIco ml-2" type="submit"><i class="fas fa-search"></i></button>
                    </label>
                    <button class="button1 right p-6" type="submit" name="nuevaventa" 
                    onClick={()=>{
                        setVerVentas(e=>!e)
                        setVerCrearVentas(e=>!e)
                    }}
                    >Nueva Venta</button>
                </div>
                <table class="table" id="tabla">
                        <thead>
                                <tr>
                                    <th>ID Venta</th>
                                    <th>Encargado</th>
                                    <th>Fecha de la venta</th>
                                    <th>Precio Total</th>
                                </tr>
                        </thead>
                        <tbody>
                            {
                                dataVentas.map((e,i)=>{
                                    return(
                                        <tr>
                                            <td>{e.id}</td>
                                            <td>{e.encargado}</td>
                                            <td>{e.fechaVenta}</td>
                                            <td>{e.valor}</td>
                                            <td>
                                                <button 
                                                class="buttonIco mr-1"
                                                onClick={()=>{
                                                    setVerVentas(e=>!e)
                                                    setIndice(i)
                                                }}>
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
        </div>
        
    )
}

const CrearVenta = () => {

    return(
        <div>Pagina para crear una venta</div>
    )
}

const ActualizarVenta = () => {

    return(
        <div>Pagina para actualizar una venta</div>
    )
}

export default Ventas
