import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OffreDetailsCar from './components/OffreDetails/OffreDetailsCar';
import HistoricPage from './pages/HistoricPage';
import Homepage from './pages/HomePage';
import OffreDetails from './pages/OffreDetails';
import OffrePage from './pages/OffrePage';
import FavoritesCarPage from './pages/FavoritesCarPage';
import ManageOffresAdminPage from './pages/ManageOffresAdminPage';
import ManageProfilAdminPage from './pages/ManageProfilAdminPage';
import 'react-toastify/dist/ReactToastify.css';
import Auth from './pages/Auth';
import CreateOffrePage from './pages/CreateOffrePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/offre" element={<OffrePage />} />
          <Route path="/offreDetails"element={<OffreDetails/>} />
          <Route path="/offreFavorites"element={<FavoritesCarPage/>} />
          <Route path="/OffreAdmin"element={<ManageOffresAdminPage/>} />
          <Route path="/profilAdmin"element={<ManageProfilAdminPage/>} />
          <Route path="/offreHistoric"element={<HistoricPage/>} />
          <Route path="/auth"element={<Auth />} />
          <Route path="/CreateOffrePage"element={<CreateOffrePage />} />



          
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
