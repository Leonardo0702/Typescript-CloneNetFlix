import { api } from "../api";

//Função para acioner o endpoint da api para que possamos pegar os dados.
export const basicFetch = async (endpoint: string) => {
  const { data } = await api.get(`${endpoint}`);
  return data;
};
