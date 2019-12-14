import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-svb.herokuapp.com'
});

export default api;
