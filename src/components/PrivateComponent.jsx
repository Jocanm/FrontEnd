import React from 'react'
import { useUser } from '../context/userContext'
import { Link } from 'react-router-dom';

const PrivateComponent = ({roleList,children}) => {
    
    const {userData} = useUser();

    if(roleList.includes(userData.rol)){
        return <>{children}</>
        // return <SinAcceso/>
    }

    return <SinAcceso userData={userData}/>
}


const SinAcceso = ({userData}) =>{

    const primerNombe = userData.name.split(" ")[0]

    return (

        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="p-20 bg-gray-300 flex flex-col items-center justify-center rounded-lg shadow-2xl w-auto h-auto">
                <div className="text-9xl font-extrabold text-gray-700">UPS! :(</div>
                <strong className="text-2xl text-gray-700 mt-9">{`Lo sentimos ${primerNombe}, parece que no tienes los permisos para acceder a este modulo.`}</strong>
                <Link to ="/">
                    <button className="mt-5 bg-gray-700 text-white px-8 py-3 font-bold text-lg rounded-xl hover:shadow-lg">
                        Home
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default PrivateComponent
