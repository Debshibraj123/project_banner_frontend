import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchBanner = async () => {
  const response = await axios.get(`${API_URL}/banner`);
  return response.data;
};

export const updateBanner = async (banner) => {
  const response = await axios.post(`${API_URL}/banner`, banner);
  return response.data;
};
