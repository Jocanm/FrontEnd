import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom"
import productos from '../data/productos'
import { useState, useEffect, useRef} from 'react'


const Productos = () => {

    //Añado la base de datos a una estado
    const [dataProduct,setDataProduct] = useState([])

    //Para actualizar datos
    const [indice,setIndice] = useState()

    //Me permiten hacer la renderización condicional
    const [listaProductos,setListaProductos] = useState(true)
    const [crearProducto,setCrearProducto] = useState(false)

    //titulo dinamico
    const [titulo,setTitulo] = useState("")


    useEffect(()=>{
        setDataProduct(productos)
    },[])

    useEffect(()=>{
        if(listaProductos) setTitulo("GESTIÓN DE PRODUCTOS")
        else if(crearProducto) setTitulo("CREAR NUEVO PRODUCTO")
        else setTitulo("ACTUALIZAR PRODUCTO")
    },[listaProductos,crearProducto])


    return (
        <div>
            <h1 className="text-2xl">{titulo}</h1>
            {
                (listaProductos)?(<Listar data={dataProduct} setListaProductos={setListaProductos} setCrearProducto={setCrearProducto} setIndice={setIndice}/>):
                (crearProducto)?(<Crear setListaProductos={setListaProductos} setCrearProducto={setCrearProducto} setDataProduct={setDataProduct}/>):
                (<Actualizar setListaProductos={setListaProductos} indice={indice} data={dataProduct} setDataProduct={setDataProduct}/>)
            }
            <ToastContainer position="top-center" autoClose={3000}/>
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
                        <button className="buttonIco" type="button"><i class="fas fa-search"></i></button>
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

const Crear = ({setListaProductos,setCrearProducto,setDataProduct}) =>{

    const form = useRef(null)

    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = new FormData(form.current);
        const nuevoproducto = {};

        data.forEach((valor,llave)=>{
            nuevoproducto[llave]=valor;
        })

        toast.success(`Producto "${nuevoproducto.descripcion}" agregado con éxito`)
        setDataProduct(e=>[...e,nuevoproducto]);
        setListaProductos(e=>!e)
        setCrearProducto(e=>!e)
    }

    return (
        <div>
            <form 
            className="h-auto w-96 flex flex-col items-center"
            ref={form}
            onSubmit={handleSubmit}
            >

                <button class="button1 right mb-4" onClick={()=>{
                    setListaProductos(e=>!e)
                    setCrearProducto(e=>!e)
                    }}>Atras
                </button>

                <label className="mb-2" htmlFor="id">
                    ID producto
                    <input className="w-48" type="number" name="id" required/>
                </label>
                <label className="mb-2" htmlFor="descripcion">
                    Descripción
                    <input className="w-48" type ="text" name="descripcion" required/>
                </label>
                <label className="mb-2" htmlFor="valor">
                    Valor unitario
                    <input className="w-48" type ="number" name="valor" required/>
                </label>
                <label htmlFor="estado">
                    Estado del producto
                    <div className="content-select">
                        <select defaultValue={0} className="w-48" name="estado" required>
                            <option disabled value={0}>Seleccione</option>
                            <option>Disponible</option>
                            <option>No disponible</option>
                        </select>
                    </div>
                </label>

                <div class="center mt-4">
                    <button class="button1" type="submit" name="Guardar_Producto">Guardar</button>
                </div>
            </form>
        </div>
    )
}

const Actualizar = ({setListaProductos,indice,data,setDataProduct}) =>{

    const [id,setId] = useState(data[indice].id);
    const [descripcion,setDescripcion] = useState(data[indice].descripcion)
    const [valor,setValor] = useState(data[indice].valor)
    const [estado,setEstado] = useState(data[indice].estado)
    

    const handleID = (e)=>{
        setId(e.target.value)
    }
    const handleDes =(e)=>{
        setDescripcion(e.target.value)
    }
    const handleVal = (e)=>{
        setValor(e.target.value)
    }
    const handleEstado = (e) =>{
        setEstado(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        const nuevosDatos = {id,descripcion,valor,estado}

        setDataProduct(e=>{
            e[indice]=nuevosDatos
            return e;
        })

        toast.success(`Datos del producto "${nuevosDatos.id}-${nuevosDatos.descripcion}" actualizados`)
        setListaProductos(e=>!e)
    }

    return (
        <div>
            <form 
            onSubmit={handleSubmit}
            className="flex flex-col items-center h-auto w-96">

            <button class="button1 right mb-4" onClick={()=>{
                setListaProductos(e=>!e)
            }}>Atras</button>

            <label htmlFor="id">
                ID producto
                <input name="id" className="mb-2 w-48" type="number" value={id} onChange={handleID} disabled/>
            </label>

            <label htmlFor="descripcion">
                Descripción
                <input className="mb-2 w-48" type ="text" name="descripcion" id="Descripcion" value={descripcion} onChange={handleDes} required/>
            </label>

            <label htmlFor="valor">
                Valor unitario
                <input className="mb-2 w-48" type ="number" name="valor" id="Valor_Unitario" value={valor} onChange={handleVal} required/>
            </label>

            <label htmlFor="estado">
                Estado
                <div className="content-select">
                    <select className="w-48" id="sel1" name="estado" value={estado} onChange={handleEstado} required>
                        <option>Disponible</option>
                        <option>No disponible</option>
                    </select>
                </div>
            </label>

            <div className="mt-4 center">
                <button className="button1" type="submit" name="Guardar_Producto">Actualizar</button>
            </div>
            </form>
        </div>
    )
}


export default Productos
