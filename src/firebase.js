import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD00qjcvwZJKCfrTnR2KGtFolTetLTe3K8",
    authDomain: "todo-app-9c603.firebaseapp.com",
    projectId: "todo-app-9c603",
    storageBucket: "todo-app-9c603.appspot.com",
    messagingSenderId: "390924810262",
    appId: "1:390924810262:web:d4954ebfd72ec8cddc9d37",
    measurementId: "G-DKVBL29L5S"
})

const db = firebaseApp.firestore();
// const auth = firebase.auth()

export default db;