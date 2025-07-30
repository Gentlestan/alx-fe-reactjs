import React, { useState } from 'react';

function Search({ onSearch, userData, loading, error }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '') return;
    onSearch(username.trim());
  };

  return (
    <div className="flex flex-col justify-center items-center my-4">
      <form className="flex flex-col justify-center items-center mb-4" onSubmit={handleSubmit}>
        <input
          className="p-2 border-2 border-gray-500 mb-2"
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit" className="px-4 py-1 bg-blue-500 text-white rounded">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Looks like we cant find the user</p>}

      {userData && (
        <div className="text-center">
          <h2>{userData.login}</h2>
          <div className="my-2">
            <img
              src={userData.avatar_url}
              alt={userData.login}
              width="170"
              className="mx-auto rounded-full"
            />
          </div>
          <p>Name: {userData.name || 'N/A'}</p>
          <p>Location: {userData.location || 'N/A'}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 underline"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
