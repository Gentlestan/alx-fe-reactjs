// githubService.js
import axios from "axios";

export const fetchUserData = async (username, location, minRepos) => {
  // If only username is provided, use the user endpoint and normalize the response
  if (username && !location && !minRepos) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return {
        total_count: 1,
        items: [response.data], // 👈 normalize to match search API shape
      };
    } catch (error) {
      console.error('Error fetching user data:', error);
      // Return total_count 0 to trigger "not found" message
      return { total_count: 0, items: [] };
    }
  }

  // Advanced search logic
  let queryParts = [];
  if (username) queryParts.push(`${username} in:login`);
  if (location) queryParts.push(`location:${location}`);
  if (minRepos) queryParts.push(`repos:>=${minRepos}`);

  const query = queryParts.join(' ');
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching advanced user search:', error);
    throw error;
  }
};