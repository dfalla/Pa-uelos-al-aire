import Axios from 'axios';

const PORT = 3001;
const instance = Axios.create({
    baseURL: `http://localhost:${PORT}`,
});

instance.interceptors.response.use( ( response ) => response.data);

export default instance;