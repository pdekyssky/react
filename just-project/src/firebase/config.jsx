import firebase from "firebase/app"
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAdo992UHRdS_M9KT032zEyrwNT7FiQtoQ",
  authDomain: "just-project-6fced.firebaseapp.com",
  projectId: "just-project-6fced",
  storageBucket: "just-project-6fced.appspot.com",
  messagingSenderId: "685612223117",
  appId: "1:685612223117:web:7e6d07d545caaa909d30c4"
}


// počáteční nastavení firebase (init)
firebase.initializeApp(firebaseConfig)


// počáteční nastavení služeb (services)
const projectFirestore = firebase.firestore()


export default projectFirestore