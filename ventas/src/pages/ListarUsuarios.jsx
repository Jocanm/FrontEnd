import React from "react";
import { Link } from "react-router-dom"
import { useState } from "react";
import UserInfo from "../components/UserInfo";
import usuarios from "../data/users";

const ListarUsuarios = () => {

    const [users,setUsuarios] = useState(usuarios);

    return (
        <>
            <h1>GESTIÓN DE USUARIOS</h1>
            <div className="bg-red">
                <form>
                    <div className="mb-8">
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
                    </div>
                    

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
                </div>
        </>
    );
};

export default ListarUsuarios;