import React from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from "react-router-dom";
import './index.css';

// Pages...
import Home from "./Pages/Home"
import About from "./Pages/About"

const router = createHashRouter(
  [
    { path: "/", element: <About /> },
    { path: "/about", element: <Home /> },
  ],
  {
    basename: "/testing"
  }
);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);