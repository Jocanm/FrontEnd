import React from 'react'

const ListarVentas = () => {
    return (
        <div>
            <h1>GESTIÓN DE VENTAS</h1>

                <form>
                    <input type ="text" name="buscar" id="buscar" placeholder="buscar"/>
                    <button class="buttonIco" type="submit"><i class="fas fa-search"></i></button>
                    <button class="button1 right" type="submit" name="nuevaventa">Nueva Venta</button>
                    <br></br><br></br><br></br><br></br>
                    
                    <table class="table" id="tabla">
                        <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ratón</td>
                                <td>15</td>
                                <td>100</td>
                                <td>
                                    <button class="buttonIco" type="submit"><i class="fas fa-search"></i>
                                    </button><button class="buttonIco" type="submit"><i class="fas fa-minus-circle"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>Teclado</td>
                                <td>34</td>
                                <td>340</td>
                                <td>
                                    <button class="buttonIco" type="submit"><i class="fas fa-search"></i>
                                    </button><button class="buttonIco" type="submit"><i class="fas fa-minus-circle"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>Pantalla</td>
                                <td>10</td>
                                <td>400</td>
                                <td>
                                    <button class="buttonIco" type="submit"><i class="fas fa-search"></i>
                                    </button><button class="buttonIco" type="submit"><i class="fas fa-minus-circle"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
        </div>
    )
}

export default ListarVentas
