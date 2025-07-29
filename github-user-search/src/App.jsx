import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Search from './components/Search'
import { fetchUserData } from './services/githubService'
import { useState } from 'react'
import './App.css'

const formStyle = {
    textAlign: 'center'
}

function Home() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    setUserData(null);
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError('Looks like we can’t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={formStyle}>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {userData && (
        <div>
          <h2>{userData.login}</h2>
          <img src={userData.avatar_url} alt={userData.login} width="150" />
          <p>Name: {userData.name || 'N/A'}</p>
          <p>Location: {userData.location || 'N/A'}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}


function App() {
  

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Home/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
