const axios = require('axios').default;

const url = "http://localhost:5000/api/v1/producto";

exports.create = (producto) =>{
    return axios.post(url, producto);
};

exports.findAll = () => {
    return axios.get(url).then();
}

exports.update = (producto) =>{
    console.log(producto);
    return axios.put(url+"/"+producto._id, producto);
}

exports.findById = (buscar) =>{
    console.log(buscar);
    return axios.get(url+"/"+ buscar);
}