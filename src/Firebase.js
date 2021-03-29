import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyALzF_PzHuBrlMA_sPyhMW-f-kv7_wNrOw",
    authDomain: "facebook-firebase-clone-45463.firebaseapp.com",
    projectId: "facebook-firebase-clone-45463",
    storageBucket: "facebook-firebase-clone-45463.appspot.com",
    messagingSenderId: "672187433381",
    appId: "1:672187433381:web:0acb64a647897fb212e84c",
    measurementId: "G-G6HBB30NHL"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db