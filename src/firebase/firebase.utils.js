import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB6E1rECdJHCCCJZ12edUDuPsAVP9ejvxE',
  authDomain: 'crown-db-6605c.firebaseapp.com',
  databaseURL: 'https://crown-db-6605c.firebaseio.com',
  projectId: 'crown-db-6605c',
  storageBucket: 'crown-db-6605c.appspot.com',
  messagingSenderId: '758964125946',
  appId: '1:758964125946:web:15044ea4d7bbc2655f0943',
  measurementId: 'G-MY0XDH51WF'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account ' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
