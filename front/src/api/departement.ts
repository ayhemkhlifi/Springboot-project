import axios from '@src/utils/axiosInstance';

const endpoint = '/departments';

export const getAllDepartments = () => axios.get(endpoint);
export const getDepartmentById = (id: number) => axios.get(`${endpoint}/${id}`);
export const createDepartment = (data: any) => axios.post(endpoint, data);
export const updateDepartment = (id: number, data: any) => axios.put(`${endpoint}/${id}`, data);
export const deleteDepartment = (id: number) => axios.delete(`${endpoint}/${id}`);
