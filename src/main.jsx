import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"></link>
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1ogerT7MZe7ArVgsTSmsoLTq45KUB9Yw",
  authDomain: "proyectoreactnatta.firebaseapp.com",
  projectId: "proyectoreactnatta",
  storageBucket: "proyectoreactnatta.appspot.com",
  messagingSenderId: "715618920903",
  appId: "1:715618920903:web:4151f38efe3e53a81e91e2"
};

// Initialize Firebase
initializeApp(firebaseConfig);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ChakraProvider>
    <App />
    </ChakraProvider>
    
  </React.StrictMode>,
)
