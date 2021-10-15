const axios = require('axios').default;

// const getToken = () =>{
//     return `Bearer ${localStorage.getItem("token")}`
// }

// axios.defaults.headers.common = {'Authorization': getToken()}

const config = {
    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
}


const url = "http://localhost:5000/api/v1/venta";

exports.create = (venta) =>{
    return axios.post(url, venta,config);
};

exports.findAll = () => {
    return axios.get(url,config).then();
}

exports.update = (venta) =>{
    console.log(venta);
    return axios.put(url+"/"+venta._id, venta,config);
}

exports.findById = (buscar) =>{
    console.log(buscar);
    return axios.get(url+"/"+ buscar,config);
}