import './App.css';
import Hero from './pages/Hero';
import Graduate from './pages/Graduate';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/graduate' element={<Graduate />} />
      </Routes>
    </div>
  );
}

export default App;
