import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { recipeApi } from './reduxApi/recipeApi.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiProvider api={recipeApi}>
    <App />
    </ApiProvider>
  </StrictMode>,
)
