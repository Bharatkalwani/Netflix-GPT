import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';
import Browser from './pages/Browser';
import Error from './pages/Error';
import ProtectedRoute from './middleware/ProtectedRoute';
import PublicRoute from './middleware/PublicRoute'
import MovieDetails from './pages/MovieDetails';
import GPTSearch from './pages/GPTSearch';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <App /> },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/browser",
        element: (
          <ProtectedRoute>
            <Browser />
          </ProtectedRoute>
        ),
      },
      {
        path: "/gptSearch",
        element: (
          <ProtectedRoute>
            <GPTSearch />
          </ProtectedRoute>
        ),
      },
      {
        path: "/movieDetails/:movieId",
        element: (
          <ProtectedRoute>
            <MovieDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter}/>
);

reportWebVitals();
