import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDyuC_LYLm-TOQezmTWFn3tKCWdKD7urK4",
  authDomain: "memoweb-aad79.firebaseapp.com",
  databaseURL: "https://memoweb-aad79.firebaseio.com",
  projectId: "memoweb-aad79",
  storageBucket: "memoweb-aad79.appspot.com",
  messagingSenderId: "24795862141",
  appId: "1:24795862141:web:a4533d7ca4d36fc4494d14",
  measurementId: "G-PE0H4D23YL"
};

firebase.initializeApp(firebaseConfig);

export default firebase;