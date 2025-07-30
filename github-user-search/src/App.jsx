import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Search from './components/Search'
import { fetchUserData } from './services/githubService'
import { useState } from 'react'
import './App.css'


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
    <div className="flex flex-col justify-center items-center bg-red-300 my-4">
      <h1 className=''>GitHub User Search</h1>
      <Search
       onSearch={handleSearch}
       userData={userData}
       loading={loading}
       error={error}
      />
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
