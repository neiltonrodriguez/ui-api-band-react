import axios from 'axios'

export const Api = () => {
 return axios.create({ baseURL: 'https://raw.githubusercontent.com/neiltonrodriguez/jsonapi/main/teste.json' });
} 