import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './pages/NotFound.jsx';
import Cadastro from './pages/Cadastro.jsx';
import { BrowserRouter, createBrowserRouter, Route, Router, RouterProvider, Routes, StaticRouterProvider } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { Component } from 'react';
import { Navbar } from './componentes/Navbar.jsx'
import { Footer } from './componentes/Footer.jsx';
import React from 'react';
import { Layout } from './componentes/Layout.jsx';
import Contato from './pages/Contato.jsx';
import { Login } from './pages/Login.jsx';






const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/contato',
        element: <Contato />
      },
      {
        path: '/cadastro',
        element: <Cadastro />
      },
      {
        path: '/home',
        element: <Home />
      }
    ]
  },

  {
    path: '*',
    element: <NotFound />
  },


])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
