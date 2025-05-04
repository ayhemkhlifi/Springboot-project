import axios from '@src/utils/axiosInstance';

const endpoint = '/juryPFE';

export const getAllJuryPFE = () => axios.get(endpoint);
export const getJuryPFEById = (id: number) => axios.get(`${endpoint}/${id}`);
export const createJuryPFE = (data: any) => axios.post(endpoint, data);
export const updateJuryPFE = (id: number, data: any) => axios.put(`${endpoint}/${id}`, data);
export const deleteJuryPFE = (id: number) => axios.delete(`${endpoint}/${id}`);
