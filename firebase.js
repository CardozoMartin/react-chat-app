import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCUBfh7QCualTYoN-wW3wOkTWqSv7HaU8g",
    authDomain: "chat-react-app-1f241.firebaseapp.com",
    projectId: "chat-react-app-1f241",
    storageBucket: "chat-react-app-1f241.appspot.com",
    messagingSenderId: "878189581223",
    appId: "1:878189581223:web:878dd47db2fd4c4bc7dc82"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export const db = getFirestore(app)