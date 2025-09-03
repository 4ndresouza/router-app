import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './pages/NotFound.jsx';
import Login from './pages/Login.jsx';
import Cadastro from './pages/Cadastro.jsx';
import { BrowserRouter, createBrowserRouter, Route, Router, RouterProvider, Routes, StaticRouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
{
  path: '/',
  element: <Login/>
},
{
  path: '/cadastro',
  element: <Cadastro />
},
{
  path: '/home',
  element: <App/>
},
{
  path:'*',
  element:<NotFound/>
},

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
