import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from 'react-loading';


const PrivateRoute = ({children}) => {

    const {isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently  } = useAuth0();

    useEffect(()=>{

        const fetchAuth0token = async()=>{
            const accesToken = await getAccessTokenSilently({
                audience: `api-autenticacion-ventas`
            })
            localStorage.setItem("token",accesToken)
        }

        if(isAuthenticated){
            fetchAuth0token()
        }

    },[isAuthenticated,getAccessTokenSilently])

    if(isLoading) return (<div className="h-screen w-screen flex justify-center items-center"><ReactLoading type="spin" color="#1c4d6e" height={300} width={300} /></div>)

    if (!isAuthenticated) {
        return loginWithRedirect();
    }

    return <>{children}</>
    
    // return isAuthenticated ? <>{children}</> : 
    // <div className="flex flex-col items-center">
    //     <span className="text-9xl text-red-500 font-extrabold">
    //         No estas autorizado para ver este sitio.
    //     </span>
    //     <Link to="/">
    //     <button className="text-5xl font-bold bg-indigo-400 rounded-md hover:bg-indigo-700 p-2 mt-4">
    //         Home
    //     </button>
    //     </Link>
    // </div>
}

export default PrivateRoute
