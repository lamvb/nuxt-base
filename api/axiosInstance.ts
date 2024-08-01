// src/api/axiosInstance.ts
import axios from 'axios';
import type { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

const router = useRouter();
// Create an instance of Axios
const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://api.example.com', // Replace with your API base URL
    timeout: 10000, // Timeout in milliseconds
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
axiosInstance.interceptors.request.use(
    (config: any) => {
        // Add any custom logic for requests here, like adding tokens
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        } else {
            router.push({path: "/login"})
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        if (error?.response?.status) {
            switch (error.response.status) {
              case 401:
                router.push({path: '/login'})
                break
              case 403:
                router.push({ name: '500' });
                break;
              case 404:
                router.push({ name: '404' });
                break;
              case 500:
                router.push({ name: '500' });
                break;
              case 503:
                router.push({ name: '500' });
                break;
              default:
                router.push({ name: '500' });
            }
        return Promise.reject(error);
    }
);

export default axiosInstance;
