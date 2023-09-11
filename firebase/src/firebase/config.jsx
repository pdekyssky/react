
import firebase from "firebase/app"
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAgi747yq97MgN16C2qqc1mSzBAqJUNu58",
    authDomain: "movies-project-ef910.firebaseapp.com",
    projectId: "movies-project-ef910",
    storageBucket: "movies-project-ef910.appspot.com",
    messagingSenderId: "19481811961",
    appId: "1:19481811961:web:ecd8027c413f494b31fb28"
}


// počáteční nastavení firebase (init)
firebase.initializeApp(firebaseConfig)


// počáteční nastavení služeb (services)
const projectFirestore = firebase.firestore()


export { projectFirestore }