import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const CrearVenta = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar productos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
                <input type ="text" name="buscar" id="buscar" placeholder="buscar por id"/>
                <br></br><br></br>
                <table class="table" id="tabla">
                        <thead>
                                <tr>
                                    <th>ID Producto</th>
                                    <th>Descripción</th>
                                    <th>Stock</th>
                                    <th>Cantidad</th>
                                </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>P001</td>
                                <td>Ratón</td>
                                <td>5</td>
                                <td>
                                    <input class="inputModal"></input>
                                    <button class="buttonIco" type="submit"><i class="fas fa-plus"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>P002</td>
                                <td>Teclado</td>
                                <td>10</td>
                                <td>
                                    <input class="inputModal"></input>
                                    <button class="buttonIco" type="submit"><i class="fas fa-plus"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>P003</td>
                                <td>Pantalla</td>
                                <td>15</td>
                                <td>
                                    <input class="inputModal"></input>
                                    <button class="buttonIco" type="submit"><i class="fas fa-plus"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button class="button1" variant="primary" onClick={handleClose}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>

            <h1>CREAR VENTA</h1>
            <form>

                <button class="button1 right"><a href="javascript: history.go(-1)">Atrás</a></button>             
                <br></br><br></br><br></br>
                <div>
                    <div>
                        <ul class="navbar">
                            <li>
                                <p><input type ="text" name="nombreencargado" id="nombree" placeholder="nombre del encargado"/></p>
                                <p><input type ="text" name="correoencargado" id="correoe" placeholder="correo@innovasoft.com"/></p>
                                <p><input type ="text" name="idencargado" id="idencargado" placeholder="Id Encargado"/></p>
                            </li>
                
                            <li>
                                <p><input type ="text" name="nombrecliente" id="nombrec" placeholder="nombre del cliente"/></p>
                                <p><input type ="text" name="telefonocliente" id="telefonoc" placeholder="teléfono"/></p>
                                <p><input type ="text" name="idcliente" id="idcliente" placeholder="Id Cliente"/></p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul class="navbar">
                                <li>
                                    <p><label>Id Venta</label></p>
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
                                            <option value="11" selected>Creada</option>
                                            <option value="22" >Embalaje</option>
                                            <option value="33">Despachada</option>
                                            <option value="44">Ruta</option>
                                            <option value="55">Ubicación</option>
                                            <option value="66">Recepción</option>
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
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button class="buttonIco" type="submit"><i class="fas fa-minus-circle"></i></button>
                                </td>
                            </tr>
                            <tr>
                            <td></td>
                            <td>                                
                                <Button class="buttonIco" variant="primary" onClick={handleShow}>
                                    <i class="fas fa-plus"></i>
                                </Button>
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

export default CrearVenta
