import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google sign in
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: 'select_account' });
googleAuthProvider.addScope(
  'https://www.googleapis.com/auth/contacts.readonly'
);

export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export { firebase };
