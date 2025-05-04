// src/api/etudiant.ts
import axios from '@src/utils/axiosInstance';

export const getAllEtudiants = () => axios.get('/etudiants');
export const getEtudiantById = (id: number) => axios.get(`/etudiants/${id}`);
export const createEtudiant = (data: any) => axios.post('/etudiants', data);
export const updateEtudiant = (id: number, data: any) => axios.put(`/etudiants/${id}`, data);
export const deleteEtudiant = (id: number) => axios.delete(`/etudiants/${id}`);
