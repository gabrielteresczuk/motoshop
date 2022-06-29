//importamos el modulo
import { initializeApp } from "firebase/app";

//cargamos la configuracion
const firebaseConfig = {
  apiKey: "AIzaSyCfhRGo3DttK3bQjOiIRsCMoHYA_VJg9Nc",
  authDomain: "coderhouse-motoshop.firebaseapp.com",
  projectId: "coderhouse-motoshop",
  storageBucket: "coderhouse-motoshop.appspot.com",
  messagingSenderId: "52131549056",
  appId: "1:52131549056:web:9d43a1853769ec25203b65"
};

// Inicializamos Firebase
export const initFirebase = () => initializeApp(firebaseConfig);