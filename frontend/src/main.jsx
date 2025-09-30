import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import { BrowserRouter } from 'react-router-dom'
import QuizContextContextProvider from './context/QuizContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <QuizContextContextProvider>

    <App />

  </QuizContextContextProvider>
  </BrowserRouter>
   
  
)
