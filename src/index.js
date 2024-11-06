import React from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from "react-router-dom";
import './index.css';

// Import AudioProvider
import { AudioProvider } from './Components/AudioProvider';

// Pages...
import Home from "./Pages/Home"
import App from "./Pages/App"
import About from "./Pages/About"

const router = createHashRouter(
  [
    { path: "/", element: <App /> },
    { path: "/about", element: <About /> },
  ]
);

createRoot(document.getElementById('root')).render(
  <AudioProvider>
    <RouterProvider router={router} />
  </AudioProvider>
);