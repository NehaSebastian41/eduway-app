// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routers/Router.jsx'; // Import the default export 'router'
import AuthProvider from './context/AuthProvider.jsx';
import Signup from './components/Signup.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
