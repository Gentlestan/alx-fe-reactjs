import React, { useState } from 'react';


function Search({ onSearch }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '') return;
    onSearch(username.trim());
  };

  return (
    <form className='flex flex-col justify-center items-center my-2' onSubmit={handleSubmit}>
      <input
        className='p-2 border-2 border-gray-500'
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <button type="submit" className='px-2'>Search</button>
    </form>
  );
}

export default Search;
