import React from 'react'
import { Link } from 'react-router-dom'

const CrearProducto = () => {

    const handleSubmit = (e) =>{
        alert("Producto creado con exito")
    }

    return (
        <div>
            <h1>CREAR PRODUCTO</h1>
            <form className="h-auto w-96">

                <div>
                    <ul className="navbar flex flex-col ul-producto">
                        <li>
                            <Link to='/ListarProductos'>
                                <button class="button1 right">Atras</button>
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
                            <li>
                                <label for="file-upload" class="subir">
                                    <input className="w-48" id="file-upload" onchange='cambiar()' type="file"/>
                                </label>
                            </li>   
                            <li><div class="center">
                                <Link to = "/ListarProductos">

                            <button class="button1" type="submit" name="Guardar_Producto" onClick={handleSubmit}>Guardar</button>
                                </Link>
                    </div></li>
                    </ul>
                </div>
            
            </form>

            

        </div>
    )
}

export default CrearProducto
