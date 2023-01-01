import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/general/index.css'
import './styles/modular/header.css'
import './styles/modular/homepage.css'
import './styles/modular/footer.css' 
import './styles/modular/testimonial.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
