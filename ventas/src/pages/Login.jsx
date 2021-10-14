import React from 'react'
import {Link} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";


const Login = () => {

    const { loginWithRedirect } = useAuth0();

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <button class ="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:shadow-lg button w-auto font-bold p-15 text-2xl" onClick={() => loginWithRedirect()}>Inicia sesión</button>
        </div>
    )

    
    // return (
    //     <div>
    //         <div class="text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
    //             <div class="relative py-3 sm:max-w-xl mx-auto text-center">
    //                 <span class="text-2xl font-light">Bienvenido.</span>
    //                 <div class="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
    //                     <div class="h-2 bg-blue-500 rounded-t-md back-layout"></div>
    //                     <div class="py-6 px-8">

    //                         <input type="email" required placeholder="Ingresa tu correo electrónico" class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-700 rounded-md"/>

    //                         <input type ="password" required placeholder="Ingresa tu contraseña" class =" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-700 rounded-md"/>
    //                         <div class ="flex justify-between items-baseline">
    //                         <Link to="/escritorio">
    //                             <button class ="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:shadow-lg button w-auto">Login</button>
    //                         </Link>
    //                         <a href="#" class ="text-sm hover:underline">¿Olvidaste tu contraseña?</a>
    //                         </div>

    //                         <Link to = "/escritorio">
    //                             <button class =" mt-6 active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type ="button">
    //                             <img alt="..." class ="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"/>Iniciar sesion con Google </button>
    //                         </Link>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //     </div>
    //     )
}


export default Login
