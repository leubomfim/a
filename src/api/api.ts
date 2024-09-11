import { api } from "../services/api"
const token = 'super-secret-key'

export const getUsers = async () => {
    const response = await api.get("api/users", { 
        headers: {
            'Authorization': `x-api-key ${token}`
        }
    });
    return response.data
}