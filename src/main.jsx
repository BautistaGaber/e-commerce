import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { CartProvider } from './context/CartContext.jsx'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDpNoSDLUkaCI3Jk2QG-X0tTZcB0uv7hkA",
  authDomain: "e-commerce-react-48332.firebaseapp.com",
  projectId: "e-commerce-react-48332",
  storageBucket: "e-commerce-react-48332.appspot.com",
  messagingSenderId: "1094552095606",
  appId: "1:1094552095606:web:eda989ee5c3915c3850857"
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
  </React.StrictMode>,
)
