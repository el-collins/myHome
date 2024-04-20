import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { UserProvider } from './components/Provider/UserContext';
import { ToastContainer } from "react-toastify";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </UserProvider>
    <ToastContainer />
  </React.StrictMode>
);
