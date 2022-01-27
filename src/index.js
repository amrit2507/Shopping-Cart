import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyDe-V6zwrSnobjm0bYRgN1RA0fN8kzMapk",
  authDomain: "cart-95859.firebaseapp.com",
  projectId: "cart-95859",
  storageBucket: "cart-95859.appspot.com",
  messagingSenderId: "400762077399",
  appId: "1:400762077399:web:1babd1ac04e9d0ca0bb092"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

