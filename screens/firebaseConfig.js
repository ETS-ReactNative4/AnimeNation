import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDnNRm4Ulq4xKwULGxjECOKdEXqdk8r_rI',
  authDomain: 'mpcredentials-3df6d.firebaseapp.com',
  databaseURL:
    'https://mpcredentials-3df6d-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'mpcredentials-3df6d',
  storageBucket: 'mpcredentials-3df6d.appspot.com',
  messagingSenderId: '181755063544',
  appId: '1:181755063544:web:206724d4e4d1fb7223df0d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
