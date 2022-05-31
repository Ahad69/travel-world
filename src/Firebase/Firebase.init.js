import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.confiq";

const authentication = ()=>{
 initializeApp(firebaseConfig);
}
export default authentication;