import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

// Import AudioProvider
import { AudioProvider } from './Components/AudioProvider';

// Pages...
import Welcome from "./Pages/Welcome"
import Home from "./Pages/Home"
import Venue from "./Pages/Venue";
import Address from "./Pages/Address"
import Error from "./Pages/Error"
import Invitation from './Pages/Invitation';
import Groom from './Pages/Groom';
import Bride from './Pages/Bride';
import Share from './Pages/Share';

const router = createBrowserRouter(
  [
    { path: "/", element: <Welcome /> },
    { path: "/*", element: <Error /> },
    { path: "/groom", element: <Groom /> },
    { path: "/bride", element: <Bride /> },
    { path: "/home", element: <Home /> },
    { path: "/venue", element: <Venue /> },
    { path: "/address", element: <Address /> },
    { path: "/invitation", element: <Invitation /> },
    { path: "/share-admin", element: <Share /> },
  ]
);

createRoot(document.getElementById('root')).render(
  <AudioProvider>
    <RouterProvider router={router} />
  </AudioProvider>
);