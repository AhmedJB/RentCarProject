import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';
import OffrePage from './pages/OffrePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/offre" element={<OffrePage />} />

        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
