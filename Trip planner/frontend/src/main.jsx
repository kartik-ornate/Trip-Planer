import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import router from './route/index'
import './index.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  // </StrictMode>,
)
