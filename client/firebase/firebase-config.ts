import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB2r-VVnPJkl81fXlyOe4Q_3-QhGH4gNlo',
  authDomain: 'habit-tracker-aeeda.firebaseapp.com',
  projectId: 'habit-tracker-aeeda',
  storageBucket: 'habit-tracker-aeeda.appspot.com',
  messagingSenderId: '373899836215',
  appId: '1:373899836215:web:9e383dfcb039aa2809f8b2',
  measurementId: 'G-08LD1KL0F2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
