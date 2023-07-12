// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCQrv5omygC8fIZw0taYisMH9ZnKf8s6s",
  authDomain: "olx-web-880f8.firebaseapp.com",
  databaseURL: "https://olx-web-880f8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "olx-web-880f8",
  storageBucket: "olx-web-880f8.appspot.com",
  messagingSenderId: "198716498408",
  appId: "1:198716498408:web:b1530094854e1b18a4445d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app)
const storage = getStorage(app)

export {db, storage}