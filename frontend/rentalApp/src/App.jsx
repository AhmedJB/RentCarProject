import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OffreDetailsCar from './components/OffreDetails/OffreDetailsCar';
import Homepage from './pages/HomePage';
import OffreDetails from './pages/OffreDetails';
import OffrePage from './pages/OffrePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/offre" element={<OffrePage />} />
          <Route path="/offreDetails"element={<OffreDetails/>} />

        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
