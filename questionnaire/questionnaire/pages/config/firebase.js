import firebase from "firebase/compat/app"

const firebaseConfig = {
    apiKey: "AIzaSyB1InA5dw0CszZJeeqmu9BWNwif7Hb8CUc",
    authDomain: "questionnaire-99c14.firebaseapp.com",
    projectId: "questionnaire-99c14",
    storageBucket: "questionnaire-99c14.appspot.com",
    messagingSenderId: "100467390670",
    appId: "1:100467390670:web:cf2c4ad1855dba4bf3389f"
}

firebase.initializeApp(firebaseConfig)

export default firebase