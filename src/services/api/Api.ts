import axios from 'axios';

export const Api = () => {
    return axios.create({
        baseURL: import.meta.env.VITE_URL_API
    });
} 