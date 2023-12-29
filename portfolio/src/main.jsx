import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './Container/About/About.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// let router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//     <Route path='/' element={<App />} />
//     <Route path='about' element={<About/>}/>
//     </>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App/>
  </React.StrictMode>,
)
