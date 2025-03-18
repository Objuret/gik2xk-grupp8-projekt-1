import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductDetail from './views/ProductDetailPage.jsx'
import HomePage from './views/HomePage.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      // {
      //   path: '/products/',
      //   element: <ProductList />
      // },
      {
        path: '/products/:id/',
        element: <ProductDetail />
      }
      // {
      //   path: '/products/:id/edit/',
      //   element: <ProductEdit />
      // },
      // {
      //   path: '/products/new/',
      //   element: <ProductNew />
      // },
      // {
      //   path: 'cart/',
      //   element: <Cart />
      // }
    ]
  }]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline /> {/* This normalizes CSS across browsers */}
    <RouterProvider router={router}/>
    </ThemeProvider>
  </StrictMode>,
);

