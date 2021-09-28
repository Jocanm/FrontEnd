import React from "react";
import { Link } from "react-router-dom"

const ListarUsuarios = () => {
    return (
        <>
            <h1>GESTIÓN DE USUARIOS</h1>
            <form>
                <input
                    type="text"
                    name="buscar"
                    id="buscar"
                    placeholder="buscar por id"
                />
                <button class="buttonIco" type="submit">
                    <i class="fas fa-search"></i>
                </button>
                {/* <Link to="/Crear">
                    <button class="button1 right" type="submit" name="nuevaventa">
                        Nueva Venta
                    </button>
                </Link> */}
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <table class="table" id="tabla">
                    <thead>
                        <tr>
                            <th>ID usuario</th>
                            <th>Nombre</th>
                            <th>Estado</th>
                            <th>Rol</th>
                        </tr>
                    </thead>
                    {/* Contenido de la tabla */}
                    <tbody>
                        <tr>
                            <td>1001857105</td>
                            <td>Jose Angarita</td>
                            <td>Autorizado</td>
                            <td>Administrador</td>
                            <td>
                                <Link to="/ActualizarUsuario">
                                    <button class="buttonIco">
                                        <i class="fas fa-search"></i>
                                    </button>
                                </Link>
                                {/* <button class="buttonIco" type="submit">
                                    <i class="fas fa-minus-circle"></i>
                                </button> */}
                            </td>
                        </tr>
                        <tr>
                            <td>1003756198</td>
                            <td>Sergio Rojas</td>
                            <td>Pendiente</td>
                            <td></td>
                            <td>
                                <Link to="/ActualizarUsuario">
                                    <button class="buttonIco">
                                        <i class="fas fa-search"></i>
                                    </button>
                                </Link>
                                {/* <button class="buttonIco" type="submit">
                                    <i class="fas fa-minus-circle"></i>
                                </button> */}
                            </td>
                        </tr>
                        <tr>
                            <td>1007657864</td>
                            <td>Daniel Hernandez</td>
                            <td>Autorizado</td>
                            <td>Vendedor</td>
                            <td>
                                <Link to="/ActualizarUsuario">
                                    <button class="buttonIco">
                                        <i class="fas fa-search"></i>
                                    </button>
                                </Link>
                                {/* <Link>
                                    <button class="buttonIco" type="submit">
                                        <i class="fas fa-minus-circle"></i>
                                    </button>
                                </Link> */}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    );
};

export default ListarUsuarios;
