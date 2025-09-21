import axios from "axios";

const BASE_URL = "https://api.github.com";

// 🔹 Fetch a single user by username (basic search)
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

// 🔹 Advanced search using GitHub Search API
// queryParams is an object like { username: "nedz", location: "nigeria", repos: 10 }
export const searchUsers = async ({ username, location, repos }) => {
  try {
    // Build the query string dynamically
    let query = username ? `${username} in:login` : "";
    if (location) query += ` location:${location}`;
    if (repos) query += ` repos:>=${repos}`;

    const response = await axios.get(
      `${BASE_URL}/search/users?q=${encodeURIComponent(query)}`
    );

    // The search endpoint returns items[] array
    return response.data.items;
  } catch (error) {
    console.error("Error performing advanced search:", error);
    throw error;
  }
};
