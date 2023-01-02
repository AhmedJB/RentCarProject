import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/general/index.css'
import './styles/modular/header.css'
import './styles/modular/homepage.css'
import './styles/modular/footer.css' 
import './styles/modular/testimonial.css' 
import './styles/modular/buttonAnimation.css'
import './styles/modular/offrepage.css'
import './styles/modular/OffreDetailsCar_style.css'
import './styles/modular/OffreDetails_General.css'
import './styles/modular/HistoricStyle.css'
import './styles/modular/ButtonsProfil.css'
import './styles/modular/auth.css'
import './styles/modular/CreateOffrePageStyle.css'
import './styles/modular/OffreDetailsPageDates.css'
import { UserProvider } from './contexts/User'
import {ToastContainer} from "react-toastify"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <App />
    <ToastContainer
      position="bottom-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    </UserProvider>    
  </React.StrictMode>,
)
