import firebase from 'firebase';
// import '@firebase/firestore';
// import ReduxSagaFirebase from 'redux-saga-firebase';

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
// const reduxSagaFirebase = new ReduxSagaFirebase(firebase);
const db = firebase.firestore();

export default db;