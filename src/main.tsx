import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from './components/pages/Loginpage/LoginPage.tsx';
import SignUpPage from './components/pages/SignUppage/SignUpPage.tsx';
import RecipePage from './components/pages/Recipepage/RecipePage.tsx';
import Test, { loader as TestLoader } from './components/Test.tsx';
import Category from './components/pages/CategoryPage/Category.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <h1>Error</h1>,
   
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignUpPage/>  
  }, 
  {
    path: "/recipes",
    element: <RecipePage/>,
    children: [
      {
        path: "/recipes/contact/:id",
        element: <Test/>,
        loader: TestLoader
      }
    ]    
  },
  {
    path: "/category/:id",
    element: <Category/>
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
