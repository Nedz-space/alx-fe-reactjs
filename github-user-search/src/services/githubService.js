import axios from "axios";

const BASE_URL = "https://api.github.com";

/**
 * Advanced GitHub user search
 * @param {Object} filters
 * @param {string} filters.username
 * @param {string} filters.location
 * @param {number} filters.minRepos
 * @param {number} filters.page
 */
export const fetchAdvancedUsers = async ({ username, location, minRepos, page = 1 }) => {
  let query = "";
  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos}`;

  const response = await axios.get(`${BASE_URL}/search/users`, {
    params: {
      q: query.trim(),
      per_page: 10,
      page,
    },
  });
  return response.data; // contains { total_count, items[] }
};
