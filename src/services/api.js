const axios = require('axios');

const api = axios.create({
    baseURL:'http://192.168.0.5:3001/'
})

export default api;