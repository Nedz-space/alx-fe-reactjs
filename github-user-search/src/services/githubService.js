import axios from "axios";

const BASE_URL = "https://api.github.com";

/**
 * Fetch a single GitHub user by username (basic search).
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

/**
 * Advanced user search using GitHub Search API
 * @param {Object} params - Search parameters
 * @param {string} params.username - GitHub username to search (optional)
 * @param {string} params.location - User location to filter (optional)
 * @param {number} params.minRepos - Minimum repositories count (optional)
 * @returns {Promise<Array>} - List of matching users
 */
export const searchUsers = async ({ username = "", location = "", minRepos = "" }) => {
  try {
    // ✅ Build query string with all filters
    let query = "";
    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await axios.get(
      `${BASE_URL}/search/users?q=${encodeURIComponent(query)}`
    );

    // GitHub Search API returns results in `items`
    return response.data.items;
  } catch (error) {
    console.error("Error performing advanced search:", error);
    throw error;
  }
};
