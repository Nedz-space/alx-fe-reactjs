import { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService"; // ✅ make sure both are imported

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]); // for advanced search results
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Basic search using fetchUserData
  const handleBasicSearch = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError("");
    setUser(null);
    setUsers([]);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we can’t find the user.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Advanced search using searchUsers
  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    if (!username && !location && !minRepos) return;

    setLoading(true);
    setError("");
    setUser(null);
    setUsers([]);

    try {
      const results = await searchUsers({ username, location, minRepos });
      setUsers(results);
    } catch (err) {
      setError("Error performing advanced search.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-6 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-center mb-4">GitHub User Search</h2>

      {/* 🔹 Basic Search Form */}
      <form onSubmit={handleBasicSearch} className="mb-6 space-y-3">
        <input
          type="text"
          placeholder="Enter GitHub username"
          className="w-full p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Basic Search
        </button>
      </form>

      {/* 🔹 Advanced Search Form */}
      <form onSubmit={handleAdvancedSearch} className="space-y-3">
        <input
          type="text"
          placeholder="Username (optional)"
          className="w-full p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location (optional)"
          className="w-full p-2 border rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min Repositories (optional)"
          className="w-full p-2 border rounded"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Advanced Search
        </button>
      </form>

      {/* 🔹 Loading & Error States */}
      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      {/* 🔹 Basic Search Result */}
      {user && (
        <div className="mt-6 text-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 mx-auto rounded-full mb-2"
          />
          <h3 className="text-xl font-semibold">{user.login}</h3>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            View Profile
          </a>
        </div>
      )}

      {/* 🔹 Advanced Search Results */}
      {users.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Advanced Search Results</h3>
          <ul className="space-y-4">
            {users.map((u) => (
              <li
                key={u.id}
                className="flex items-center space-x-4 border-b pb-2"
              >
                <img
                  src={u.avatar_url}
                  alt={u.login}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{u.login}</p>
                  <a
                    href={u.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
