import axios from 'axios';

const api = axios.create({
    baseURL: 'https://postsnap.onrender.com',
});

export default api;