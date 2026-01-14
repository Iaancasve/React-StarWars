import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { StarWarsApp } from './StarWarsApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StarWarsApp/>
  </StrictMode>,
)
