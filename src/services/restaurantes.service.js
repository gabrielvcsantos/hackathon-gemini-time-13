import api from "./api";

export async function getRestaurantes(id) {
  try {
    const restaurantes = await api.get(`/restaurantes/${id}.json`);
    return restaurantes.data;
  } catch (err) {
    throw err;
  }
};