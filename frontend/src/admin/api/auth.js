import api from '../../utils/axios';

export const login = async ({ id, password }) => {
    const response = await api.post('/auth/login', { id, password });
    return response.data.data; 
};
