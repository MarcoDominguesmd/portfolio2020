import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const config = firebase.initializeApp({
    apiKey: "AIzaSyA5ISGoTYrDWkZm-suVTMglcdEw6LnKTOw",
    authDomain: "portfolio2020-6bb07.firebaseapp.com",
    projectId: "portfolio2020-6bb07",
    storageBucket: "portfolio2020-6bb07.appspot.com",
    messagingSenderId: "949801330988",
    appId: "1:949801330988:web:c0c90f717929b116396489",
    measurementId: "G-27GVCPGTKQ"
    
});

export const auth = config.auth();
export default firebase;