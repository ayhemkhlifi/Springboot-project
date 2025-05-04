import axios from '@src/utils/axiosInstance';

export const getAllEnseignants = () => axios.get('/enseignants');
export const getEnseignantById = (id: number) => axios.get(`/enseignants/${id}`);
export const createEnseignant = (data: any) => axios.post('/enseignants', data);
export const updateEnseignant = (id: number, data: any) => axios.put(`/enseignants/${id}`, data);
export const deleteEnseignant = (id: number) => axios.delete(`/enseignants/${id}`);
