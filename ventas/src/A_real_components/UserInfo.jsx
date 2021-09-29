import { useState } from 'react'
import { Link } from 'react-router-dom';
import ActualizarUsuario from '../components/ActualizarUsuario';

const UserInfo = ({ usuarios }) => {

    

    const [lista, setLista] = useState(usuarios);
    return (
        <>
            {lista.map((e,i) => {
                // const handleUserInfo = (e) =>{
                //     return (
                //         <ActualizarUsuario></ActualizarUsuario>
                //     )
                // }
                return (
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.nombre}</td>
                        <td>{e.estado}</td>
                        <td>{e.rol}</td>
                        <td>{e.email}</td>
                        {/* <td>
                            <button class="buttonIco" onClick={handleUserInfo}>
                                <i class="fas fa-search"></i>
                            </button>
                        </td> */}
                        <td><Link to="/ActualizarUsuario">
                            <button class="buttonIco">
                                <i class="fas fa-search"></i>
                            </button>
                        </Link></td>
                    </tr>                    
                )
            })
            }
        </>
    )
}

export default UserInfo
