import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { StarwarsApp } from './StarWarsApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StarwarsApp/>
  </StrictMode>,
)
