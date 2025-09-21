import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;
const BASE_URL = "https://api.github.com";

export const searchUser = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`, {
    headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {},
  });
  return response.data;
};
