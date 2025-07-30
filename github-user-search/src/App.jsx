import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
