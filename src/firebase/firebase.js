import firebase from 'firebase'

import firestore from 'firebase/firestore';





// Your web app's Firebase configuration
    var firebaseConfig = {
    apiKey: "AIzaSyCGpELXYXUFWxMmpcYHiLvSJnFzQy9OVLY",
    authDomain: "feranmi-mart.firebaseapp.com",
    projectId: "feranmi-mart",
    storageBucket: "feranmi-mart.appspot.com",
    messagingSenderId: "137203550972",
    appId: "1:137203550972:web:a140843ca1f38c1806e579"
  };
  
//   / // initializeApp(firebaseConfig)
  const firebaseApp = firebase.initializeApp(firebaseConfig);

//  firebaseApp.firestore().settings({})
  export default firebaseApp.firestore()
//   