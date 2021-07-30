import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC3jX6ln2sTtlEbKPofC4ix5BHuHjrYs58',
  authDomain: 'docs-clone-db48d.firebaseapp.com',
  projectId: 'docs-clone-db48d',
  storageBucket: 'docs-clone-db48d.appspot.com',
  messagingSenderId: '671936576874',
  appId: '1:671936576874:web:33e3b2eb574fb15ba6b913'
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()

export {db}
