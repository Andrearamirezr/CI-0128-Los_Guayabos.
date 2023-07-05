import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDWpdknpsqfvVYVnOZvB9V7P0QZOLb7hGU",
    authDomain: "ficus-bebd6.firebaseapp.com",
    projectId: "ficus-bebd6",
    storageBucket: "ficus-bebd6.appspot.com",
    messagingSenderId: "677232623413",
    appId: "1:677232623413:web:4d2810a0bdaf6bbe16167c",
    measurementId: "G-X8SRXC8M9G"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

