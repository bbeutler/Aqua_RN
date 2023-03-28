import axios from 'axios';

const api = axios.create({
    baseURL: 'https://aquawaterapp.herokuapp.com',
    timeout: 10000,
    headers: {
        'Authorization': 'Bearer decadev1234',
        'Content-Type': 'application/json'
    }
});

export default api;