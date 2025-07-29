import React, { useState } from 'react';


const formStyle = {
    textAlign: 'center'
}
function Search({ onSearch }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '') return;
    onSearch(username.trim());
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
