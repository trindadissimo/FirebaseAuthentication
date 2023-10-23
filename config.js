// firebase config key setup

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdvx_hj57wqSO7zuKmm_V-pwD7nXO_LIA",
  authDomain: "test-f3b95.firebaseapp.com",
  projectId: "test-f3b95",
  storageBucket: "test-f3b95.appspot.com",
  messagingSenderId: "553452785359",
  appId: "1:553452785359:web:5875e0fd01dcc79811b1ba",
  measurementId: "G-R6TE76XL37"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
