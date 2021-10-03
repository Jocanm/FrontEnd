import {Link} from "react-router-dom"
import { useState, useEffect, useRef, useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ventas from '../data/ventas'
import productos from "../data/productos";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Ventas = () => {

    //Añade los datos de las ventas y de los productos a un estado
    const [dataVentas,setDataVentas] = useState([])
    const [dataProduct,setDataProduct] = useState([])

    //Me permite controlar la renderización condicional
    const [verVentas,setVerVentas] = useState(true)
    const [verCrearVentas,setVerCrearVentas] = useState(false)

    //Para la pagina de actualizar los datos
    const [indice,setIndice] = useState()


    useEffect(()=>{
        setDataVentas(ventas)
        setDataProduct(productos)
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
            (verCrearVentas)?
                (<CrearVenta 
                    setVerCrearVentas={setVerCrearVentas} 
                    setVerVentas= {setVerVentas}
                    setDataVentas={setDataVentas}
                    dataProduct={dataProduct}
                    setDataProduct={setDataProduct}
                    />):
            <ActualizarVenta/>
            }
            <ToastContainer position="top-center" autoClose={3000}/>
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
                    <Link to="/escritorio">
                        <button class="buttonIco right"><i class="fas fa-home"></i></button>
                    </Link>
                </div>
                <div className="flex justify-between mt-2">
                    <label className="flex" htmlFor="buscar">
                        <input type ="text" name="buscar" id="buscar" placeholder="buscar por id"/>
                        <button className="buttonIco ml-2" type="submit"><i class="fas fa-search"></i></button>
                    </label>
                    <button class="button1 right p-6 font-bold" type="submit" name="nuevaventa" 
                    onClick={()=>{
                        setVerVentas(e=>!e)
                        setVerCrearVentas(e=>!e)
                    }}
                    >Nueva Venta</button>
                </div>
                <table class="table mt-3" id="tabla">
                        <thead>
                                <tr>
                                    <th>ID Venta</th>
                                    <th>Encargado</th>
                                    <th>Fecha de la venta</th>
                                    <th>Estado</th>
                                    <th>Precio Total</th>
                                </tr>
                        </thead>
                        <tbody>
                            {
                                dataVentas.map((e,i)=>{
                                    return(
                                        <tr>
                                            <td>{e.idV}</td>
                                            <td>{e.encargado}</td>
                                            <td>{e.fechaVenta}</td>
                                            <td>{e.estado}</td>
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

const CrearVenta = ({dataProduct,setVerCrearVentas,setVerVentas,setDataVentas}) => {

    const form = useRef(null)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    //Para almacenar los productos de la venta
    const [productos,setProductos] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault();

        const data = new FormData(form.current)
        const nuevaVenta = {}

        data.forEach((valor,llave)=>{
            nuevaVenta[llave]=valor
        })

        toast.success("La venta ha sido creada con éxito")
        setDataVentas(e=>[...e,nuevaVenta])
        setVerVentas(e=>!e)
        setVerCrearVentas(e=>!e)
    }

    return(
        <div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar productos</Modal.Title>
            </Modal.Header>
        <Modal.Body>
            
            <input className="w-full" type ="text" name="buscar" id="buscar" placeholder="buscar por id"/>
            <br></br><br></br>
            <table class="table" id="tabla">
                    <thead>
                            <tr>
                                <th>ID</th>
                                <th>Descripción</th>
                                <th>Valor</th>
                                <th>Estado</th>
                            </tr>
                    </thead>
                    <tbody>
                    {
                        dataProduct.map((e,i)=>{
                            return(
                                <tr>
                                    <td>{e.id}</td>
                                    <td>{e.descripcion}</td>
                                    <td>{e.valor}</td>
                                    <td>{e.estado}</td>
                                    <td>
                                        <input className="inputModal border border-gray-500 mr-1"></input>
                                        <button class="buttonIco" type="submit"><i class="fas fa-plus"></i></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button class="button1" variant="primary" onClick={handleClose}>Guardar</Button>
            </Modal.Footer>
        </Modal>

        <h1 className="text-2xl">CREAR NUEVA VENTA</h1>
        <form onSubmit={handleSubmit} ref={form}>
                <button class="buttonIco right" onClick={()=>{
                    setVerVentas(e=>!e)
                    setVerCrearVentas(e=>!e)
                }}><i class="fas fa-arrow-left"></i></button>           
            <br></br><br></br><br></br>
            
            <div className="flex justify-between">
                <div className="flex flex-col">

                    <label htmlFor="idV">
                        ID venta
                        <input type ="number" name="idV" required/>
                    </label>

                    <label htmlFor="encargado">
                        Nombre del encargado
                        <input type ="text" name="encargado" required/>
                    </label>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="nombre">
                        Nombre del cliente
                        <input type ="text" name="nombre" required/>
                    </label>

                    <label htmlFor="idC">
                        ID cliente
                        <input type ="number" name="idC" required/>
                    </label>
                </div>
            </div>

            <div className="flex justify-between my-4">
                <label className="flex w-full items-center justify-start px-0" htmlFor="fechaVenta">
                    Fecha de la venta
                    <input className="ml-4" type ="text" name="fechaVenta" id="fechav" placeholder="dia/mes/año" required/>
                </label>
                
                <label className="flex w-full items-center justify-end px-0" htmlFor="estado">
                    Estado de la venta
                    <select className="w-48 ml-4 h-8" name="estado" defaultValue={0} required>
                            <option disabled value={0}>Seleccione</option>
                            <option>En proceso</option>
                            <option>Cancelada</option>
                            <option>Entregada</option>
                    </select>
                </label>
            </div>

                <table class="table" id="tabla">
                    <thead>
                            <tr>
                                <th>Id Producto</th>
                                <th>Descripción</th>
                                <th>Precio Unitario</th>
                                <th>Cantidad</th>
                                <th>Precio total</th>
                            </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button class="buttonIco" type="submit"><i class="fas fa-minus-circle"></i></button>
                            </td>
                        </tr>
                        <Button class="buttonIco" variant="primary" onClick={handleShow}>
                            <i class="fas fa-plus"></i>
                        </Button>
                    </tbody> 
                </table>
            
            <div className="flex items-center justify-center">
                <button className="button1 mt-5 font-bold" type="submit" name="guardarVenta">Guardar</button>
            </div>
            
        </form>

        

    </div>
    )
}

const ActualizarVenta = () => {

    return(
        <div>Pagina para actualizar una venta</div>
    )
}

export default Ventas
