import axios from '@src/utils/axiosInstance';

const endpoint = '/personnes';

export const getAllPersonnes = () => axios.get(endpoint);
export const getPersonneById = (id: number) => axios.get(`${endpoint}/${id}`);
export const createPersonne = (data: any) => axios.post(endpoint, data);
export const updatePersonne = (id: number, data: any) => axios.put(`${endpoint}/${id}`, data);
export const deletePersonne = (id: number) => axios.delete(`${endpoint}/${id}`);
