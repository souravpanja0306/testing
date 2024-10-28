import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

// Pages...
import Home from "./Pages/Home"
import About from "./Pages/About"

const router = createBrowserRouter([
  { path: "/", element: <About /> },
  { path: "/about", element: <Home /> },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);