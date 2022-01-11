import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDpSUqSaJWHHHMQS0ALZrTBks131ZuWLss",
  authDomain: "osiris-react.firebaseapp.com",
  projectId: "osiris-react",
  storageBucket: "osiris-react.appspot.com",
  messagingSenderId: "380566880253",
  appId: "1:380566880253:web:f567c07793637f7e40a394"
};



const app = initializeApp(firebaseConfig);
export const getFirestoreApp = () => {
  return app
}