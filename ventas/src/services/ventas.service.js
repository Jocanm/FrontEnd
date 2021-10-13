const axios = require('axios').default;

const url = "http://localhost:5000/api/v1/venta";

exports.create = (venta) =>{
    return axios.post(url, venta);
};

exports.findAll = () => {
    return axios.get(url).then();
}

exports.update = (venta) =>{
    console.log(venta);
    return axios.put(url+"/"+venta._id, venta);
}

exports.findById = (buscar) =>{
    console.log(buscar);
    return axios.get(url+"/"+ buscar);
}