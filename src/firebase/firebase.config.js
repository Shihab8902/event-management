import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBLyGnAbpO0ffzA4FiOPfnJt2DSY2qRdEg",
    authDomain: "bytex-73f35.firebaseapp.com",
    projectId: "bytex-73f35",
    storageBucket: "bytex-73f35.appspot.com",
    messagingSenderId: "183066041332",
    appId: "1:183066041332:web:f88d73f38cca85f8e477a1"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;