import axios from "axios";

const getToken = () => {
    return `Bearer ${localStorage.getItem('token')}`;
};

//PETICIONES PARA VENTAS

export const obtenerVentas = async(succesCallback,errorCallback) =>{

    const options = { method: "GET", url: "http://localhost:5000/ventas/",headers: {
        Authorization: getToken(),
    }};

    await axios
        .request(options)
        .then(succesCallback)
        .catch(errorCallback);
}

export const crearVenta = async(data,succesCalback,errorCalback) =>{
    const options = {
        method: "POST",
        url: "http://localhost:5000/ventas/",
        headers: { 'Content-Type': 'application/json',Authorization: getToken() },
        data,
    }

    await axios
            .request(options)
            .then(succesCalback)
            .catch(errorCalback)
}

export const actualizarVenta = async(id,data,succesCalback,errorCalback)=>{
    
    const options = {
        method: 'PATCH',
        url: `http://localhost:5000/ventas/${id}`,
        headers: { 'Content-Type': 'application/json',Authorization: getToken() },
        data
        };

        await axios
        .request(options)
        .then(succesCalback)
        .catch(errorCalback);

}

export const eliminarVenta = async (id,succesCalback,errorCalback)=>{
    const options = {
        method: 'DELETE',
        url: `http://localhost:5000/ventas/${id}`,
        headers: { 'Content-Type': 'application/json',Authorization: getToken() },
        data: {},
        };
        
        await axios
        .request(options)
        .then(succesCalback)
        .catch(errorCalback);
}