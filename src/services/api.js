const axios = require('axios');

const api = axios.create({
    baseURL:'http://192.168.42.33:3001/'
})

export default api;