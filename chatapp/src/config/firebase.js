import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCxNk4VolMniv73hMEw-OA2EJ1iAGe1ZUY",
    authDomain: "chat-app-f0eec.firebaseapp.com",
    projectId: "chat-app-f0eec",
    storageBucket: "chat-app-f0eec.appspot.com",
    messagingSenderId: "756167223141",
    appId: "1:756167223141:web:edb025331606d3d2c2638c"
}

firebase.initializeApp(firebaseConfig)

export default firebase