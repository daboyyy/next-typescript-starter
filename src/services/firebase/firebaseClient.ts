import * as firebase from 'firebase/app';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCJuhHUKV9VjO_-nY2OgQRDdsVPFpkBa50',
  authDomain: 'trading-dashboard-v3.firebaseapp.com',
  projectId: 'trading-dashboard-v3',
  storageBucket: 'trading-dashboard-v3.appspot.com',
  messagingSenderId: '797651552092',
  appId: '1:797651552092:web:093a1da34afd1c9a296399',
};

const firebaseApp = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const firebaseAuth = getAuth(firebaseApp);

export { firebase, firebaseApp, firebaseAuth };
