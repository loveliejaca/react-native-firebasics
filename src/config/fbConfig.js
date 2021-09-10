import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
import "firebase/functions"

// Replace this with your own config details
const fbConfig = firebase.initializeApp({
  apiKey: 'AIzaSyCPoSUoq2jpdGLUc2arEh0wIJkCvgI66BU',
  authDomain: 'react-firebasics-development.firebaseapp.com',
  databaseURL: 'https://react-firebasics-development-default-rtdb.firebaseio.com',
  projectId: 'react-firebasics-development',
  storageBucket: 'react-firebasics-development.appspot.com',
  messagingSenderId: '863373120746',
  appId: '1:863373120746:web:67fc5ea25f6a25646cf393'
})

export const auth = fbConfig.auth()
export const db = fbConfig.firestore()
export const storage = fbConfig.storage()
export const functions = fbConfig.functions()

export default fbConfig
