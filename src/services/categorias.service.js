import api from "./api";

export function getAllCategorias () {
  try {
    const categorias = api.get(`/categorias.json`);
    return categorias;
  } catch (err) {
    throw err;
  }
};