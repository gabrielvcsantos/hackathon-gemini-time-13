import Api from "./api";

export async function getRestaurantes(id) {
  id = id ?? '';

  try {
    const restaurantes = await Api.get(`/restaurantes/${id}.json`);
    return restaurantes.data;
  } catch (err) {
    throw err;
  }
};

export async function getDetalhe(id) {
  id = id ?? '';

  try {
    const detalhe = await Api.get(`/detalhes/${id}.json`);
    return detalhe.data;
  } catch (err) {
    throw err;
  }
}