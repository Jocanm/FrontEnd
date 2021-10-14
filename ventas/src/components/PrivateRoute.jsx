import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

    if(isLoading) return (<div>Loading...</div>)

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
