import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7yA96dEI1CqTliC_wGXT85P_3Y6TNGMU",
  authDomain: "https://netflix-clone-rn.firebaseapp.com",
  projectId: "netflix-clone-rn",
  storageBucket: "netflix-clone-rn.appspot.com",
  messagingSenderId: "895179956262",
  appId: "1:895179956262:web:53d9e67e3c611bee9d86e7"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

const auth = firebase.auth();

export { firebase,db,auth };

