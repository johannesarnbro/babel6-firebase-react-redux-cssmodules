import firebase from 'firebase';
import { firebase as firebaseConfig } from '../config';
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
