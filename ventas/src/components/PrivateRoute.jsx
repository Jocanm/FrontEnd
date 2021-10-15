import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from 'react-loading';
import { obtenerDatosUsuarios } from '../utils/apiUsuarios';
import { useUser } from '../context/userContext';


const PrivateRoute = ({ children }) => {

    const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently } = useAuth0();

    const {setUserData} = useUser();

    useEffect(() => {

        const fetchAuth0token = async () => {
            const accesToken = await getAccessTokenSilently({
                audience: `api-autenticacion-ventas`
            })
            localStorage.setItem("token", accesToken)
            // console.log(accesToken)
            await obtenerDatosUsuarios(
                (res) => { 
                    console.log("Datos usuarios"); 
                    console.log(res) 
                    console.log(res.data) 
                    setUserData(res.data)
                },
                (err) => { console.error(err) }
            )
        }

        if (isAuthenticated) {
            fetchAuth0token()
        }

    }, [isAuthenticated, getAccessTokenSilently])

    if (isLoading) return (<div className="h-screen w-screen flex justify-center items-center"><ReactLoading type="spin" color="#1c4d6e" height={200} width={200} /></div>)

    if (!isAuthenticated) {
        return loginWithRedirect();
    }

    return <>{children}</>
}

export default PrivateRoute
