import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCfhRGo3DttK3bQjOiIRsCMoHYA_VJg9Nc",
  authDomain: "coderhouse-motoshop.firebaseapp.com",
  projectId: "coderhouse-motoshop",
  storageBucket: "coderhouse-motoshop.appspot.com",
  messagingSenderId: "52131549056",
  appId: "1:52131549056:web:9d43a1853769ec25203b65"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
