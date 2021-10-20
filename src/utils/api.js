import axios from "axios";

const getToken = () => {
        return `Bearer ${localStorage.getItem('token')}`;
};


//PETICIONES PARA PRODUCTOS

export const obtenerProductos = async(succesCallback,errorCallback) =>{

    const options = { 
        method: "GET", 
        url: "https://blooming-coast-29889.herokuapp.com/productos/",
        headers: {
            Authorization: getToken(),
        }
    };

    await axios
        .request(options)
        .then(succesCallback)
        .catch(errorCallback);
}

export const crearProducto = async(data,succesCalback,errorCalback) =>{
    const options = {
        method: "POST",
        url: "https://blooming-coast-29889.herokuapp.com/productos/",
        headers: { 'Content-Type': 'application/json',Authorization: getToken() },
        data,
    }

    await axios
            .request(options)
            .then(succesCalback)
            .catch(errorCalback)
}

export const actualizarProducto = async(id,data,succesCalback,errorCalback)=>{
    
    const options = {
        method: 'PATCH',
        url: `https://blooming-coast-29889.herokuapp.com/productos/${id}`,
        headers: { 'Content-Type': 'application/json',Authorization: getToken() },
        data
        };

        await axios
        .request(options)
        .then(succesCalback)
        .catch(errorCalback);

}

export const eliminarProducto = async (id,succesCalback,errorCalback)=>{
    const options = {
        method: 'DELETE',
        url: `https://blooming-coast-29889.herokuapp.com/productos/${id}`,
        headers: { 'Content-Type': 'application/json',Authorization: getToken() },
        data: {},
        };
        
        await axios
        .request(options)
        .then(succesCalback)
        .catch(errorCalback);
}