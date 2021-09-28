import React from 'react'
import Button from 'react-bootstrap/Button'
import profile from '../images/profile_picture.jpg'
import { Link } from 'react-router-dom'

const ActualizarUsuario = () => {

    const guardado = (e) =>{
        alert("Cambios guardados con éxito")
    } 
    return (
        <>
            <h1>ACTUALIZAR DATOS DEL USUARIO</h1>

            <form className='form-usuarios'>
                {/* <button className="button1 right"><a href="javascript: history.go(-1)">Atrás</a></button> */}
                <div className='center'>
                    <Link to='/ListaUsuarios'>
                        <button className="boton-usuario">Atras</button>
                    </Link>
                </div>

                <br></br><br></br>
                <div>
                    <div>
                        <ul className="navbar-usuarios">
                            <li>
                                <p>
                                    <input type="text" name="idencargado" id="idencargado" placeholder="ID Usuario" disabled/>
                                </p>
                                <p>
                                    <input type="text" name="nombreencargado" id="nombree" placeholder="nombre del usuario" />
                                </p>
                                <p>
                                    <input type="email" name="correoencargado" id="correoe" placeholder="correo@innovasoft.com" />
                                </p>
                                <p>
                                    <div className='content-select'>
                                        <select name="selEstado" id="selEstado">
                                            <option value="1">Pendiente</option>
                                            <option value="2">Autorizado</option>
                                            <option value="3">No autorizado</option>
                                            <i></i>
                                        </select>
                                    </div>
                                </p>
                                <p>
                                <div className='content-select'>
                                        <select name="selRol" id="selRol">
                                            <option value="1">Administrador</option>
                                            <option value="2">Vendedor</option>
                                            <i></i>
                                        </select>
                                    </div>
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="center">
                        <br></br><br></br><br></br>
                        <Link to='listaUsuarios'>
                            <button className="button1" type="submit" name="guardarUsuario" onClick={guardado}>Guardar</button>
                        </Link>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ActualizarUsuario
