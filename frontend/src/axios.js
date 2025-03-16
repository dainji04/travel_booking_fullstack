import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000', // URL backend Laravel
    withCredentials: true, // Cho phép gửi cookie
});

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

axiosClient.interceptors.request.use(async (config) => {
    const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('XSRF-TOKEN='))
        ?.split('=')[1];

    if (token) {
        config.headers['X-XSRF-TOKEN'] = token;
    }

    return config;
});

export default axiosClient;
