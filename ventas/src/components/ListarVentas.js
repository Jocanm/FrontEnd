import React from 'react'
import {Link} from "react-router-dom"

const ListarVentas = () => {
    return (
        <div>
            
            <h1>GESTIÓN DE VENTAS</h1>

                <form>
                    <input type ="text" name="buscar" id="buscar" placeholder="buscar por id"/>
                    <button class="buttonIco" type="submit"><i class="fas fa-search"></i></button>
                    <Link to="/CrearVenta">
                        <button class="button1 right" type="submit" name="nuevaventa">Nueva Venta</button>
                    </Link>
                    <br></br><br></br><br></br><br></br>
                    
                    <table class="table" id="tabla">
                        <thead>
                                <tr>
                                    <th>ID Venta</th>
                                    <th>Descripción Venta</th>
                                    <th>Precio Total</th>
                                </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>V001</td>
                                <td>Insumos</td>
                                <td>$10000</td>
                                <td>
                                    <Link to="/ActualizarVenta">
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

export default ListarVentas
