import React from 'react'
import {Link} from "react-router-dom"
import productos from '../data/productos'
import { useState, useEffect } from 'react'


const Productos = () => {

    const [dataProduct,setDataProduct] = useState([])
    const [indice,setIndice] = useState()
    const [listaProductos,setListaProductos] = useState(true)
    const [crearProducto,setCrearProducto] = useState(false)
    const [titulo,setTitulo] = useState("")
    const [nuevoProducto,setNuevoProducto] = useState({})

    // const producto = {
    //     id:"005",
    //     descripcion:"CPU",
    //     valor:"500000",
    //     estado:"Disponible"
    // }

    // const handleData = ()=>{
    //     setDataProduct(e=>[...e,producto])
    // }

    useEffect(()=>{
        setDataProduct(productos)
    },[])

    useEffect(()=>{
        if(listaProductos) setTitulo("GESTIÓN DE PRODUCTOS")
        else if(crearProducto) setTitulo("NUEVO PRODUCTO")
        else setTitulo("ACTUALIZAR PRODUCTO")
    },[listaProductos,crearProducto])


    return (
        <div>
            {/* <button onClick={handleData}>Agregar</button> */}
            <h1>{titulo}</h1>
            {/* <Listar data={dataProduct}/> */}
            {
                (listaProductos)?(<Listar data={dataProduct} setListaProductos={setListaProductos} setCrearProducto={setCrearProducto} setIndice={setIndice}/>):(crearProducto)?(<Crear setListaProductos={setListaProductos} setCrearProducto={setCrearProducto}/>):(<Actualizar setListaProductos={setListaProductos} indice={indice} data={dataProduct}/>)
            }
        </div>
    )
}

const Listar = ({data,setListaProductos,setCrearProducto,setIndice}) =>{

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
                    <button className="button1 right p-6 h" type="submit" name="nuevoproducto" onClick={()=>{
                        setListaProductos(e=>!e)
                        setCrearProducto(e=>!e)
                    }}>Nuevo Producto</button>
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
                                            <button class="buttonIco mr-1"  onClick={()=>{
                                                setListaProductos(e=>!e)
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
    )
}

const Crear = ({setListaProductos,setCrearProducto}) =>{

    return (
        <div>
            <form className="h-auto w-96">
            <div>
                <ul className="navbar flex flex-col ul-producto">
                    <li>
                        <Link to='/ListarProductos'>
                            <button class="button1 right" onClick={()=>{
                                setListaProductos(e=>!e)
                                setCrearProducto(e=>!e)
                            }}>Atras</button>
                        </Link>   
                    </li>
                        <li><input className="w-48" type="number" placeholder="ID producto"/></li>
                        <li><input className="w-48" type ="text" name="Descripcion" id="Descripcion" placeholder="Descripcion"/></li>
                        <li>
                            <input className="w-48" type ="text" name="Valor_Unitario" id="Valor_Unitario" placeholder="Valor unitario"/>
                        </li>
                        <li>
                            <div className="content-select">
                            <select className="w-48" id="sel1" name="sel1">
                                <option value="11" selected>Disponible</option>
                                <option value="22" >No disponible</option>
                            </select>
                            </div>
                        </li>
                        {/* <li>
                            <label for="file-upload" class="subir">
                                <input className="w-48" id="file-upload" onchange='cambiar()' type="file"/>
                            </label>
                        </li>    */}
                        <li>
                            <div class="center">
                                <button class="button1" type="submit" name="Guardar_Producto" onClick={()=>{
                                    alert("Producto guardado con exito")
                                    setListaProductos(e=>!e)
                                    setCrearProducto(e=>!e)
                                }}>Guardar</button>
                            </div>
                        </li>
                </ul>
            </div>

            </form>
        </div>
    )
}

const Actualizar = ({setListaProductos,indice,data}) =>{

    return (
        <div>
            <form className="h-auto w-96">
            <div>
                <ul className="navbar flex flex-col ul-producto">
                    <li>
                        <Link to='/ListarProductos'>
                            <button class="button1 right" onClick={()=>{
                                setListaProductos(e=>!e)
                            }}>Atras</button>
                        </Link>   
                    </li>
                        <li><input className="w-48" type="number" placeholder={data[indice].id}/></li>
                        <li><input className="w-48" type ="text" name="Descripcion" id="Descripcion" placeholder={data[indice].descripcion}/></li>
                        <li>
                            <input className="w-48" type ="text" name="Valor_Unitario" id="Valor_Unitario" placeholder={data[indice].valor}/>
                        </li>
                        <li>
                            <div className="content-select">
                            <select className="w-48" id="sel1" name="sel1">
                                <option value="00">{data[indice].estado}</option>
                                <option value="11" selected>Disponible</option>
                                <option value="22" >No disponible</option>
                            </select>
                            </div>
                        </li>
                        {/* <li>
                            <label for="file-upload" class="subir">
                                <input className="w-48" id="file-upload" onchange='cambiar()' type="file"/>
                            </label>
                        </li>    */}
                        <li>
                            <div class="center">
                                <button class="button1" type="submit" name="Guardar_Producto" onClick={()=>{
                                    alert("Producto actualizado con exito")
                                    setListaProductos(e=>!e)
                                }}>Actualizar</button>
                            </div>
                        </li>
                </ul>
            </div>

            </form>
        </div>
    )
}


export default Productos
