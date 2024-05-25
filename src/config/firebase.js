import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { setPersistence, browserSessionPersistence } from 'firebase/auth';

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFc0JBnRa7rahv8GPPyRulsW-XM9ZeP_A",
  authDomain: "my-instagram-c91b5.firebaseapp.com",
  projectId: "my-instagram-c91b5",
  storageBucket: "my-instagram-c91b5.appspot.com",
  messagingSenderId: "229252111738",
  appId: "1:229252111738:web:31f132056496c930758ac3",
  measurementId: "G-P79JD1BLSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize the Firebase services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Persistence is set to session-based");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

export { db, auth, storage };
