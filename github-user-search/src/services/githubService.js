import axios from "axios";

const BASE_URL = "https://api.github.com/users/";

/**
 * Fetch GitHub user data by username
 * @param {string} username - GitHub username to search
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}${username}`);
    return response.data;
  } catch (error) {
    // Propagate error to be handled by the component
    throw error;
  }
};
