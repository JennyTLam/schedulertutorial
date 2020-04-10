import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD-HoaJiwYBNXs8dmisBZb7fz7QiJVK_6A",
  authDomain: "schedulertutorial.firebaseapp.com",
  databaseURL: "https://schedulertutorial.firebaseio.com",
  projectId: "schedulertutorial",
  storageBucket: "schedulertutorial.appspot.com",
  messagingSenderId: "226532638802",
  appId: "1:226532638802:web:66779e980d13bd3c4c1f8b",
  measurementId: "G-RMPY1Y11QB"
};

firebase.initializeApp(firebaseConfig);

export default firebase;