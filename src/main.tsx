import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/pages/Loginpage/LoginPage.tsx";
import SignUpPage from "./components/pages/SignUppage/SignUpPage.tsx";
import RecipePage from "./components/pages/Recipepage/RecipePage.tsx";
import Test, { loader as TestLoader } from "./components/Test.tsx";
import Category from "./components/pages/CategoryPage/Category.tsx";
import Recipe from "./components/pages/Recipepage/Recipe.tsx";
import AddRecipe from "./components/pages/Recipepage/AddRecipe.tsx";
import { store } from "./providers/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/recipes",
    element: <RecipePage />,
    children: [
      {
        path: "/recipes/contact/:id",
        element: <Test />,
        loader: TestLoader,
      },
    ],
  },
  {
    path: "/recipes/add",
    element: <AddRecipe />,
  },
  {
    path: "/recipes/:id",
    element: <Recipe />,
  },
  {
    path: "/category/:id",
    element: <Category />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </StrictMode>
);
