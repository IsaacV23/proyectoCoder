import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBuo1VknuP1GHmGIiXhVUIKfW0ovvqpXwc",
  authDomain: "proyectocoder-88378.firebaseapp.com",
  projectId: "proyectocoder-88378",
  storageBucket: "proyectocoder-88378.appspot.com",
  messagingSenderId: "220974449274",
  appId: "1:220974449274:web:fbbcae1daf0132d264b1c3"
};

 const db = initializeApp(firebaseConfig);
//  console.log(db);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
