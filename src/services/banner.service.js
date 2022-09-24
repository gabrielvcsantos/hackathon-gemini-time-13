import api from "./api";

export const getAllBanners = async () => {
  try {
    const response = await api.get(`/banners.json`);
    return response;
  } catch (err) {
    throw err;
  }
};
