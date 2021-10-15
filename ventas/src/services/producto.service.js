const axios = require('axios').default;

// const getToken = () =>{
//     return `Bearer ${localStorage.getItem("token")}`
// }

// axios.defaults.headers.common = {'Authorization': getToken()}

const config = {
    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
}

const url = "http://localhost:5000/api/v1/producto";

exports.create = (producto) =>{
    return axios.post(url, producto,config);
};

exports.findAll = () => {
    return axios.get(url,config).then();
}

exports.update = (producto) =>{
    console.log(producto);
    return axios.put(url+"/"+producto._id, producto,config);
}

exports.findById = (buscar) =>{
    console.log(buscar);
    return axios.get(url+"/"+ buscar,config);
}