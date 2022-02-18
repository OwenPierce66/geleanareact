import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASY-kwPgwhuWwwOeTYWJfoJ7fkszmfTQE",
  authDomain: "ninja-firegram-56685.firebaseapp.com",
  projectId: "ninja-firegram-56685",
  storageBucket: "ninja-firegram-56685.appspot.com",
  messagingSenderId: "947724619950",
  appId: "1:947724619950:web:7d30a0cd94facd38dc9d3f",
  measurementId: "G-XGDDX0V28T",
};
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
