import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import { Login } from './pages/Login.jsx';
import './index.css'
import { Home } from './pages/Home.jsx';
import { Layout } from './componentes/Layout.jsx';
import Cadastro from './pages/Cadastro.jsx';
import NotFound from './pages/NotFound.jsx';
import Contato from './pages/Contato.jsx';

const router = createBrowserRouter([
  /* O único path que vai ficar de fora do layout (navbar + footer) */
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/contato',
        element: <Contato />
      },
      {
        path: '/cadastro',
        element: <Cadastro />
      },
    ]
  },
  /* Página não encontrada - 404 */
  {
    path: '*',
    element: <NotFound />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
