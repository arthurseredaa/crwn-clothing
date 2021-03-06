import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBl0tmffWVe7i1iV1vaMbCP1Oh_2WKh_QE',
  authDomain: 'crwn-clothing-a8070.firebaseapp.com',
  projectId: 'crwn-clothing-a8070',
  storageBucket: 'crwn-clothing-a8070.appspot.com',
  messagingSenderId: '381297504225',
  appId: '1:381297504225:web:15dfdccbf50a2f967e2ca0',
  measurementId: 'G-S2BN9B5EF1',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore
export const db = getFirestore();

export const createUserProfileDocument = async ({ name, uid, email, createdAt }) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), { name, uid, email, createdAt });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

// Google sign in
export const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: 'select_account' });
googleAuthProvider.addScope(
  'https://www.googleapis.com/auth/contacts.readonly'
);

export const signInWithGoogle = () => {
  try {
    return auth.signInWithPopup(googleAuthProvider);
  } catch (e) {
    console.log(`signInWithGoogle: ${e}`);
  }
};
export const signInWithEmailAndPassword = (email, password) => {
  try {
    return auth.signInWithEmailAndPassword(email, password);
  } catch (e) {
    console.log(`signInWithEmailAndPassword: ${e}`);
  }
};

export { firebase };
