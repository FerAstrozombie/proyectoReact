import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1vUXB_MwYNJQbDU1P0jYrCf-HavVEDSc",
  authDomain: "coderhouse-ecommerce-14c1d.firebaseapp.com",
  projectId: "coderhouse-ecommerce-14c1d",
  storageBucket: "coderhouse-ecommerce-14c1d.appspot.com",
  messagingSenderId: "357237821892",
  appId: "1:357237821892:web:25c386313a3df318119491"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
