import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyA4x9g3cTd1HUORbkyR2ZPGxiesXUVntxQ",
  authDomain: "test-clothing-db.firebaseapp.com",
  databaseURL: "https://test-clothing-db.firebaseio.com",
  projectId: "test-clothing-db",
  storageBucket: "test-clothing-db.appspot.com",
  messagingSenderId: "316563134010",
  appId: "1:316563134010:web:ee72a0f52258054c938703",
  measurementId: "G-HEVM7N6E2Y"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
