import React from 'react'
import { Link } from 'react-router-dom'
import usuarios from '../data/users'

const ActualizarUsuario = ({indice}) => {

    const guardado = (e) =>{
        alert("Cambios guardados con éxito")
    } 
    return (
        <>
            <h1>ACTUALIZAR DATOS DEL USUARIO</h1>

            <form className='w-96 h-auto'>

                <ul className="lista-usuarios flex flex-col items-center justify-center">

                    <li className="mb-2">
                        <Link to='/ListaUsuarios'>
                            <button className="boton-usuario">Atras</button>
                        </Link>
                    </li>

                    <li>
                        <input type="text" name="idencargado" id="idencargado" placeholder={usuarios[0].id} disabled/>
                    </li>
                    <li>
                        <input type="text" name="nombreencargado" id="nombree" placeholder={usuarios[0].nombre} />
                    </li>
                    <li>
                    <input type="email" name="correoencargado" id="correoe" placeholder={usuarios[0].email} />
                    </li>
                    <li>
                        <div className="content-select">
                        <select className="w-52" name="" id="">
                            <option value="1">Pendiente</option>
                            <option value="2">Autorizado</option>  
                            <option value="3">No autorizado</option>
                        </select>
                        </div>
                    </li>
                    <li>
                        <div className="content-select">
                        <select className="w-52" name="" id="">
                            <option value="1">Administrador</option>
                            <option value="2">Vendedor</option>  
                        </select>
                        </div>
                    </li>
                    <li className="mt-3">
                        <Link to='listaUsuarios'>
                            <button className="button1" type="submit" name="guardarUsuario" onClick={guardado}>Guardar</button>
                        </Link>
                    </li>                          
                </ul>


            </form>
        </>
    )
}

export default ActualizarUsuario
