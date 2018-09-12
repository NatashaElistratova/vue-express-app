const axios = require('axios');

const API = axios.create({
    baseURL: 'http://localhost:3000'
  });

module.exports = API;

