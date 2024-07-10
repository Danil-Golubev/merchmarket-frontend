import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://merchmarket-backend.onrender.com/',
});
export default instance;
