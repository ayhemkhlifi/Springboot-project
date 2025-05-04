import axios from '@src/utils/axiosInstance';

const endpoint = '/encadrants';

export const getAllEncadrants = () => axios.get(endpoint);

export const getEncadrantById = (id: number) => axios.get(`${endpoint}/${id}`);

export const createEncadrant = (data: any) => axios.post(endpoint, data);

export const updateEncadrant = (id: number, data: any) => axios.put(`${endpoint}/${id}`, data);

export const deleteEncadrant = (id: number) => axios.delete(`${endpoint}/${id}`);
