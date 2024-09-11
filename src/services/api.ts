import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://nextbuy-backend.vercel.app/'
})