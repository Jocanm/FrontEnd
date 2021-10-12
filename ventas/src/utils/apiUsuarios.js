import axios from "axios";

//PETICIONES PARA PRODUCTOS

export const obtenerUsuarios = async(succesCallback,errorCallback) =>{

    const options = { method: "GET", url: "http://localhost:5000/usuarios/"};

    await axios
        .request(options)
        .then(succesCallback)
        .catch(errorCallback);
}

export const crearUsuario = async(data,succesCalback,errorCalback) =>{
    const options = {
        method: "POST",
        url: "http://localhost:5000/usuarios/",
        headers: { 'Content-Type': 'application/json' },
        data,
    }

    await axios
            .request(options)
            .then(succesCalback)
            .catch(errorCalback)
}

export const actualizarUsuario = async(id,data,succesCalback,errorCalback)=>{
    
    const options = {
        method: 'PATCH',
        url: `http://localhost:5000/usuarios/${id}`,
        headers: { 'Content-Type': 'application/json' },
        data
        };

        await axios
        .request(options)
        .then(succesCalback)
        .catch(errorCalback);

}

export const eliminarUsuario = async (id,succesCalback,errorCalback)=>{
    const options = {
        method: 'DELETE',
        url: `http://localhost:5000/usuarios/${id}`,
        headers: { 'Content-Type': 'application/json' },
        data: {},
        };
        
        await axios
        .request(options)
        .then(succesCalback)
        .catch(errorCalback);
}