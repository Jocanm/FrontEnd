import React from 'react'
import {Link} from "react-router-dom"

const ListarProductos = () => {
    return (
        <div>
            
            <h1>GESTIÓN DE PRODUCTOS</h1>

                <form>
                    <Link to="/">
                        <button class="buttonIco right"><i class="fas fa-home"></i></button> 
                    </Link><br /><br /><br />

                    <input type ="text" name="buscar" id="buscar" placeholder="buscar por id"/>
                    <button class="buttonIco" type="submit"><i class="fas fa-search"></i></button>
                    <Link to="/CrearProducto">
                        <button class="button1 right" type="submit" name="nuevoproducto">Nuevo Producto</button>
                    </Link>
                    <br></br><br></br><br></br><br></br>
                    
                    <table class="table" id="tabla">
                        <thead>
                                <tr>
                                    <th>ID Producto</th>
                                    <th>Descripción</th>
                                    <th>Valor</th>
                                </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>V001</td>
                                <td>Insumos</td>
                                <td>$10000</td>
                                <td>
                                    <Link to="/ActualizarProducto">
                                        <button class="buttonIco">
                                            <i class="fas fa-search"></i>
                                        </button>
                                    </Link>
                                    <button class="buttonIco" type="submit"><i class="fas fa-minus-circle"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>V002</td>
                                <td>Insumos</td>
                                <td>$10000</td>
                                <td>
                                    <button class="buttonIco" type="submit"><i class="fas fa-search"></i>
                                    </button><button class="buttonIco" type="submit"><i class="fas fa-minus-circle"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>V003</td>
                                <td>Insumos</td>
                                <td>$10000</td>
                                <td>
                                    <button class="buttonIco" type="submit"><i class="fas fa-search"></i></button>
                                    <Link>
                                        <button class="buttonIco" type="submit">
                                            <i class="fas fa-minus-circle"></i>
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                                
        </div>
    )
}

export default ListarProductos
