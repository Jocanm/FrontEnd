import React from "react";
import { Link } from "react-router-dom"
import { useState } from "react";
import UserInfo from "../components/UserInfo";
import usuarios from "../data/users";

const ListarUsuarios = () => {

    // const [usuarios, setUsuario] = useState(
    //     [
    //         {
    //             nombre:"Jose Luis Angarita Mendoza",
    //             id:'1001857105',
    //             estado:'Autorizado',
    //             rol:'Administrador',
    //             email:"jose@innovasoft.com"
    //         },
    //         {
    //             nombre:'Jonathan Osorio',
    //             id:'1001857162',
    //             estado:'Pendiente',
    //             email:"jonathan@innovasoft.com"
    //         },
    //         {
    //             nombre:"Jorge Perez",
    //             id:"1005675453",
    //             estado:"Autorizado",
    //             rol:"Vendedor",
    //             email:"jorge@innovasoft.com"
    //         }
    //     ]
    // )

    const [users,setUsuarios] = useState(usuarios);

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
                <Link to="/">
                        <button class="buttonIco right botonuser"><i class="fas fa-home"></i></button>
                </Link>
                <br></br><br></br><br></br><br></br>

                <table class="table" id="tabla">
                    <thead>
                        <tr>
                            <th>ID usuario</th>
                            <th>Nombre</th>
                            <th>Estado</th>
                            <th>Rol</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                    <UserInfo usuarios={users}></UserInfo>
                    </tbody>
                </table>
            </form>
        </>
    );
};

export default ListarUsuarios;