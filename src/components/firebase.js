import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBfbs7N9Cx2P9dmCqV5GGMS4hW6WaUTXYU",
    authDomain: "disneyplus-clone-3d794.firebaseapp.com",
    projectId: "disneyplus-clone-3d794",
    storageBucket: "disneyplus-clone-3d794.appspot.com",
    messagingSenderId: "397931256018",
    appId: "1:397931256018:web:de8eb18cbd2beb06adf50b",
    measurementId: "G-3BRS942N1X"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider, storage };
export default db;