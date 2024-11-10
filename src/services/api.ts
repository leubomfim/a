import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://nextbuy-backend-two.vercel.app/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_REACT_BEARER_TOKEN}`
    },
    withCredentials: true
})