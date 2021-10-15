import {Link} from "react-router-dom"
import { useState, useEffect, useRef} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { obtenerUsuarios } from '../utils/apiUsuarios'
import { obtenerProductos } from '../utils/api'
import { obtenerVentas,crearVenta,actualizarVenta } from '../utils/apiVentas'
import { nanoid } from "nanoid";
import ReactLoading from 'react-loading';


const Ventas = () => {

    //Añade los datos de las ventas, de los productos y de los usuarios a un estado
    const [dataVentas,setDataVentas] = useState([])
    const [dataProduct,setDataProduct] = useState([])
    const [dataUsers,setDataUsers] = useState([])

    //Creamos estados donde se alamacenen los productos en estado disponible y los usuarios que sean vendedores
    const [productosDisponibles,setProductosDisponibles] = useState([])
    const [vendedores,setVendedores] = useState([]);

    //Me permite controlar la renderización condicional
    const [verVentas,setVerVentas] = useState(true)
    const [verCrearVentas,setVerCrearVentas] = useState(false)

    //Para la pagina de actualizar los datos
    const [indice,setIndice] = useState()

    //Pagina de loading
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        
        const getInfo = async() => {
            setLoading(true)
            await obtenerProductos(
                (res)=>{setDataProduct(res.data)},
                (err)=>{console.error(err)})
            await obtenerUsuarios(
                (res)=>{setDataUsers(res.data)},
                (err)=>{console.error(err)})
            await obtenerVentas(
                (res)=>{setDataVentas(res.data); setLoading(false);},
                (err)=>{console.error(err)}
            )
        }

        getInfo()
    },[verVentas])

    
    //Filtro para productos y vendedores
    useEffect(()=>{
            setProductosDisponibles(dataProduct.filter(e=>{
                return e.estado === "Disponible"
            }))
    },[dataProduct])


    useEffect(()=>{
        setVendedores(dataUsers.filter(e=>{
            return e.rol === "Vendedor"
        }))
    },[dataUsers])

    return (
        <div>
            {
            (verVentas)?
                (<Listar 
                dataVentas={dataVentas}
                setVerCrearVentas={setVerCrearVentas}
                setVerVentas={setVerVentas}
                setIndice={setIndice}
                loading={loading}
                />):
            (verCrearVentas)?
                (<CrearVenta 
                    setVerCrearVentas={setVerCrearVentas} 
                    setVerVentas= {setVerVentas}
                    dataProduct={productosDisponibles}
                    dataUsers={vendedores}
                    />):
            <ActualizarVenta
            setVerVentas={setVerVentas}
            indice={indice}
            dataVentas={dataVentas}
            dataProduct={productosDisponibles}
            dataUsers = {vendedores}
            />
            }
            <ToastContainer position="top-center" autoClose={3000}/>
        </div>
    )
}

const Listar = ({dataVentas,setIndice,setVerCrearVentas,setVerVentas,loading}) =>{    

    const [busqueda,setBusqueda] = useState("");
    const [ventasFiltradas,setVentasFiltradas] = useState([]);

    useEffect(()=>{
        setVentasFiltradas(dataVentas.filter(e=>{
            return JSON.stringify(e).toLowerCase().includes(busqueda.toLowerCase())
        }))
    },[busqueda,dataVentas])

    return (
        <div>
            <h1 className="text-2xl">GESTIÓN DE VENTAS</h1>
            <form action="">
            <div className="flex flex-col">
                <div>
                    <Link to="/" >
                        <button class="buttonIco right"><i class="fas fa-home"></i></button>
                    </Link>
                </div>
                <div className="flex justify-between mt-2">
                    <label className="flex p-0" htmlFor="buscar">
                        <input type ="text" name="buscar" id="buscar" placeholder=" Buscar"
                        value={busqueda}
                        onChange={(e)=>setBusqueda(e.target.value)}
                        />
                    </label>
                    <button class="button1 right p-6 font-bold" type="submit" name="nuevaventa" 
                    onClick={()=>{
                        setVerVentas(e=>!e)
                        setVerCrearVentas(e=>!e)
                    }}
                    >Nueva Venta</button>
                </div>
                {
                    (loading)?
                    (<div className="flex flex-col justify-center items-center"><ReactLoading type="spin" color="#1c4d6e" height={64} width={64} /></div>):
                    (<table class="table mt-3" id="tabla">
                    <thead>
                            <tr>
                                <th>ID Venta</th>
                                <th>Encargado</th>
                                <th>Cliente</th>
                                <th>ID cliente</th>
                                <th>Estado</th>
                                <th>Precio Total</th>
                            </tr>
                    </thead>
                    <tbody>
                        {
                            ventasFiltradas.map((e,i)=>{
                                return(
                                    <tr>
                                        <td>{e._id.slice(17)}</td>
                                        <td>{e.encargado.nombre}</td>
                                        <td>{e.nombreCliente}</td>
                                        <td>{e.idC}</td>
                                        <td>{e.estado}</td>
                                        <td>{e.valor}</td>
                                        <td>
                                            <button 
                                            class="buttonIco mr-1"
                                            onClick={()=>{
                                                setVerVentas(e=>!e)
                                                setIndice((indice)=>{
                                                    dataVentas.forEach((el,ind)=>{
                                                        if(el._id===e._id) {indice = ind}
                                                    })
                                                    return indice;
                                                });
                                            }}>
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
                
            </div>

        </form>
        </div>
        
    )
}

const CrearVenta = ({dataProduct,setVerCrearVentas,setVerVentas,dataUsers}) => {

    const form = useRef(null)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Para almacenar los productos de la venta
    const [productos,setProductos] = useState([])


    const handleSubmit = async(e) =>{
        e.preventDefault();

        const data = new FormData(form.current)
        const nuevaVenta = {}

        data.forEach((valor,llave)=>{
            nuevaVenta[llave]=valor
        })

        nuevaVenta.productos = productos;
        
        let precioTotal = 0;
        nuevaVenta.productos.forEach(e=>{
            precioTotal += e.valor;
        })
        nuevaVenta.valor = precioTotal;

        const ventaFinal = {...nuevaVenta, encargado:dataUsers.filter(e=>e._id===nuevaVenta.encargado)[0]}

        await crearVenta(ventaFinal,
            (res)=>{
                console.log(res.data)
                toast.success("La venta ha sido creada con éxito")
            },
            (err)=>{
                console.error(err)
                toast.error("Error al crear la venta")
            }
            )

        
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
            
            <input className="w-full" type ="text" name="buscar" id="buscar" placeholder=" Buscar"/>
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
                                <tr key={nanoid()}>
                                    <td>{e._id.slice(20)}</td>
                                    <td>{e.descripcion}</td>
                                    <td>{e.valor}</td>
                                    <td>{e.estado}</td>
                                    <td>
                                        <button class="buttonIco" type="button"
                                        onClick={()=>{
                                            setProductos([...productos,e])
                                        }}
                                        ><i class="fas fa-plus"
                                        ></i></button>
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
                {/* <Button class="button1" variant="primary" onClick={handleClose}>Guardar</Button> */}
            </Modal.Footer>
        </Modal>

        <h1 className="text-2xl">CREAR NUEVA VENTA</h1>
        <form onSubmit={handleSubmit} ref={form}>
                <button class="buttonIco right" onClick={()=>{
                    setVerVentas(e=>!e)
                    setVerCrearVentas(e=>!e)
                }}><i class="fas fa-arrow-left"></i></button>           

            
            <div className="flex justify-between mt-16">
                <div className="flex flex-col">

                    <label htmlFor="_id">
                        ID venta
                        <input type ="number" name="_id" disabled placeholder="El sistema define el ID"/>
                    </label>

                    <label htmlFor="encargado" className="flex flex-col mt-2">
                        Vendedor
                        {/* <input type ="text" name="encargado" required/> */}
                        <select className="w-48 h-8" name="encargado" required defaultValue={0}>
                            <option disabled value={0}>Seleccione</option>
                            {dataUsers.map(e=>{
                                return (
                                    <option key={nanoid()} value={e._id}>{e.nombre}</option>
                                )
                            })}
                        </select>
                    </label>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="nombre">
                        Nombre del cliente
                        <input type ="text" name="nombreCliente" required/>
                    </label>

                    <label htmlFor="idC" className="mt-2">
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
                            </tr>
                    </thead>
                    <tbody>
                        {
                            productos.map((e,i)=>{
                                return (
                                    <tr key={nanoid()}>
                                        <td>{e._id.slice(20)}</td>
                                        <td>{e.descripcion}</td>
                                        <td>{e.valor}</td>
                                        <td>
                                            <button class="buttonIco" type="button"><i class="fas fa-minus-circle"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                            <Button className="buttonIco mt-8" variant="primary" onClick={handleShow}>
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

const ActualizarVenta = ({setVerVentas,indice,dataVentas,dataProduct,dataUsers}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [_id,set_id] = useState(dataVentas[indice]._id)
    const [fechaVenta,setFechaVenta] = useState(dataVentas[indice].fechaVenta)
    const [encargado,setEncargado] = useState(dataVentas[indice].encargado.nombre)
    const [estado,setEstado] = useState(dataVentas[indice].estado)
    const [nombre,setNombre] = useState(dataVentas[indice].nombreCliente)
    const [idC,setIdc] = useState(dataVentas[indice].idC)
    const [productos,setProductos] = useState(dataVentas[indice].productos)

    const handleFecha = (e) =>{
        setFechaVenta(e.target.value)
    }
    const handleEncargado = (e) =>{
        setEncargado(e.target.value)
    }
    const handleEstado = (e) =>{
        setEstado(e.target.value)
    }
    const handleNombre = (e) =>{
        setNombre(e.target.value)
    }
    const handleIdc = (e) =>{
        setIdc(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()

        let precioTotal = 0;

        productos.forEach(e=>{
            precioTotal+=e.valor
        })

        const encargadoF = dataUsers.filter(e=>e.nombre === encargado)[0]

        const nuevaVenta = {encargado:encargadoF,nombreCliente:nombre,idC,fechaVenta,estado,productos,valor:precioTotal}

        actualizarVenta(_id,nuevaVenta,
            (res)=>{
                console.log(res.data)
                toast.success(`La venta ${_id.slice(17)} ha sido actualizada exitosamente`)
            },
            (err)=>{
                console.error(err)
                toast.error("Error al actualizar la venta")
            }
            )
        setVerVentas(e=>!e)
    }

    return(
        <div>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar productos</Modal.Title>
            </Modal.Header>
        <Modal.Body>
            
            <input className="w-full" type ="text" name="buscar" id="buscar" placeholder=" Buscar"/>

            <table className="table mt-7" id="tabla">
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
                                <tr key={nanoid()}>
                                    <td>{e._id.slice(20)}</td>
                                    <td>{e.descripcion}</td>
                                    <td>{e.valor}</td>
                                    <td>{e.estado}</td>
                                    <td>
                                        <button class="buttonIco" type="submit"
                                        onClick={()=>setProductos([...productos,e])}
                                        ><i class="fas fa-plus"></i></button>
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
            </Modal.Footer>
        </Modal>

        <h1 className="text-2xl">ACTUALIZAR LA VENTA</h1>
        <form onSubmit={handleSubmit}>
                <button class="buttonIco right" onClick={()=>{
                    setVerVentas(e=>!e)
                }}><i class="fas fa-arrow-left"></i></button>           
            <br></br><br></br><br></br>
            
            <div className="flex justify-between">
                <div className="flex flex-col">

                    <label htmlFor="_id">
                        ID venta
                        <input className="border-2 border-black" value={_id.slice(17)} type ="text" name="_id" disabled/>
                    </label>

                    <label htmlFor="encargado">
                        Vendedor
                        <select className="w-48 h-8" name="encargado" required value={encargado} onChange={handleEncargado}>
                            {
                                dataUsers.map(e=>(<option>{e.nombre}</option>))
                            }
                        </select>
                    </label>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="nombre">
                        Nombre del cliente
                        <input value={nombre} onChange={handleNombre} type ="text" name="nombre" required/>
                    </label>

                    <label htmlFor="idC">
                        ID cliente
                        <input value={idC} onChange={handleIdc} type ="number" name="idC" required/>
                    </label>
                </div>
            </div>

            <div className="flex justify-between my-4">
                <label className="flex w-full items-center justify-start px-0" htmlFor="fechaVenta">
                    Fecha de la venta
                    <input value={fechaVenta} onChange={handleFecha} className="ml-4" type ="text" name="fechaVenta" id="fechav" placeholder="dia/mes/año" required/>
                </label>
                
                <label className="flex w-full items-center justify-end px-0" htmlFor="estado">
                    Estado de la venta
                    <select value={estado} onChange={handleEstado} className="w-48 ml-4 h-8" name="estado" required>
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
                                <th>Precio total</th>
                            </tr>
                    </thead>
                    <tbody>
                        {
                            productos.map((e,i)=>{
                                return (
                                    <tr key={nanoid()}>
                                        <td>{e._id.slice(20)}</td>
                                        <td>{e.descripcion}</td>
                                        <td>{e.valor}</td>
                                        <td>
                                            <button class="buttonIco" type="button"><i class="fas fa-minus-circle"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
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

export default Ventas
