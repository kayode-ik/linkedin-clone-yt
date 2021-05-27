import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDaP2ask6I0roCJYhczOyv7dk4rX1q7eLg",
    authDomain: "linkedin-cloneyt-react.firebaseapp.com",
    projectId: "linkedin-cloneyt-react",
    storageBucket: "linkedin-cloneyt-react.appspot.com",
    messagingSenderId: "873936179085",
    appId: "1:873936179085:web:507e9e9b5274d446e737c4",
    measurementId: "G-043W59WG9Z"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };