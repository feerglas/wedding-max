import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: 'max-wedding.firebaseapp.com',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
