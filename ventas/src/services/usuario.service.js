const axios = require('axios').default;

const getToken = () =>{
    return `Bearer ${localStorage.getItem("token")}`
}

axios.defaults.headers.common = {'Authorization': getToken()}

const url = 'http://localhost:5000/api/v1/usuario';

exports.findAll = () => {
    return axios.get(url).then();
}

exports.update = (usuario) =>{
    console.log(usuario);
    return axios.put(url+"/"+usuario._id, usuario);
}