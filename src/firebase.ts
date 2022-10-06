import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAgwomK8X0IK4lK0b83CRgLrNR-E2BAGkU",
    authDomain: "tatahara-std.firebaseapp.com",
    projectId: "tatahara-std",
    storageBucket: "tatahara-std.appspot.com",
    messagingSenderId: "452758044811",
    appId: "1:452758044811:web:b5659f2f039ccb1f78948e",
    measurementId: "G-BS3K8V4WKM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };