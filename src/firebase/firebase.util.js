import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB_dKS6qySNcXR8DV97cTgtPoyqKsDAgYk",
  authDomain: "crown-db-36331.firebaseapp.com",
  projectId: "crown-db-36331",
  storageBucket: "crown-db-36331.appspot.com",
  messagingSenderId: "229450381437",
  appId: "1:229450381437:web:5734114809e35abffd1914",
  measurementId: "G-Q7P5F9W0HS",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;