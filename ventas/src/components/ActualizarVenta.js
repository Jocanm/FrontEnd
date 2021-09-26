import React from 'react'
import {Link} from "react-router-dom"


const ActualizarVenta = () => {
    return (
        <div>
            <h1>ACTUALIZAR VENTA</h1>

            <form>
                <Link to="/ListarVentas">
                    <button class="right buttonIco">
                        <i class="fas fa-arrow-left"></i>
                    </button>
                </Link>
                <br></br><br></br><br></br>
                <div>
                    <div>
                        <ul class="navbar">
                            <li>
                                <p><input type ="text" name="nombreencargado" id="nombree" placeholder="nombre del encargado"/></p>
                                <p><input type ="text" name="correoencargado" id="correoe" placeholder="correo@innovasoft.com"/></p>
                                <p><label>id encargado</label> </p>
                            </li>
                
                            <li>
                                <p><input type ="text" name="nombrecliente" id="nombrec" placeholder="nombre del cliente"/></p>
                                <p><input type ="text" name="telefonocliente" id="telefonoc" placeholder="300000000"/></p>
                                <p><label>id cliente</label> </p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul class="navbar">
                                <li>
                                    <p><input type ="text" name="idventa" id="idventa" placeholder="id venta"/></p>
                                    <p>
                                        <label>Fecha de la compra: </label>
                                        <input type ="date" name="fechaventa" id="fechav"/>
                                    </p>
                                    <p>
                                        <label>Fecha de pago: </label>
                                        <input type ="date" name="fechaventa" id="fechav"/>
                                    </p>
                                </li>
                    
                                <li>
                                    <p>
                                        <label>Estado de la venta:</label>
                                        <select id="sel1" name="sel1">
                                            <option value="11" selected>Estado 1</option>
                                            <option value="22" >Estado 2</option>
                                            <option value="33">Estado 3</option>
                                            <option value="44">Estado 4</option>
                                        </select>
                                    <p/>
                                    </p>
                                </li>
                            </ul>
                    </div>

                    <div>
                    <table class="table" id="tabla">
                        <thead>
                                <tr>
                                    <th>Id Producto</th>
                                    <th>Descripción</th>
                                    <th>Cantidad</th>
                                </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>001</td>
                                <td>Ratón</td>
                                <td>3</td>
                                <td>
                                    <button class="buttonIco" type="submit"><i class="fas fa-minus-circle"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>002</td>
                                <td>Teclado</td>
                                <td>1</td>
                                <td>
                                    <button class="buttonIco" type="submit"><i class="fas fa-minus-circle"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>003</td>
                                <td>Pantalla</td>
                                <td>1</td>
                                <td>
                                    <button class="buttonIco" type="submit"><i class="fas fa-minus-circle"></i></button>
                                </td>
                            </tr>
                            <tr>
                            <td></td>
                            <td>
                                <button class="buttonIco" type="submit"><i class="fas fa-plus"></i></button>
                            </td>
                            <td>Valor Total</td>
                            <td>$000000</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    </div>
                    <div class="center">
                        <br></br><br></br><br></br>
                        <button class="button1" type="submit" name="guardarventa">Guardar</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default ActualizarVenta
