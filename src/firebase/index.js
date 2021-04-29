import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: 'max-wedding.firebaseapp.com',
  projectId: 'max-wedding',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// auth instance
const auth = firebase.auth();

// db instance and collection
const db = firebase.firestore();
const registrations = db.collection('registrations');
const { firestore } = firebase;

export {
  auth,
  registrations,
  firestore,
};
