import axios from '@src/utils/axiosInstance';

const endpoint = '/groupes';

export const getAllGroupes = () => axios.get(endpoint);
export const getGroupeById = (id: number) => axios.get(`${endpoint}/${id}`);
export const createGroupe = (data: any) => axios.post(endpoint, data);
export const updateGroupe = (id: number, data: any) => axios.put(`${endpoint}/${id}`, data);
export const deleteGroupe = (id: number) => axios.delete(`${endpoint}/${id}`);
