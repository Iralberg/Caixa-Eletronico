import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Inicio from './rounter/Inicio'
import './index.css'





createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Inicio/>
  </StrictMode>
)

