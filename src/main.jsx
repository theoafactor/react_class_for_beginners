import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom';


import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx';

const router = createBrowserRouter([
   { path: "/", element: <App /> },
   { path: "/home", element: <Home />}
])

createRoot(document.getElementById('root')).render(
   <RouterProvider router={router}/>    
 
)
