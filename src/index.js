import React from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from "react-router-dom";
import './index.css';

// Import AudioProvider
import { AudioProvider } from './Components/AudioProvider';

// Pages...
import Welcome from "./Pages/Welcome"
import App from "./Pages/App"
import Venue from "./Pages/Venue";
import Address from "./Pages/Address"
import Error from "./Pages/Error"
import Invitation from './Pages/Invitation';
import Rsvp from './Pages/Rsvp';

const router = createHashRouter(
  [
    { path: "/", element: <Welcome /> },
    { path: "/*", element: <Error /> },
    { path: "/home", element: <App /> },
    { path: "/venue", element: <Venue /> },
    { path: "/address", element: <Address /> },
    { path: "/invitation", element: <Invitation /> },
    { path: "/rsvp", element: <Rsvp /> },
  ]
);

createRoot(document.getElementById('root')).render(
  <AudioProvider>
    <RouterProvider router={router} />
  </AudioProvider>
);