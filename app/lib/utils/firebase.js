import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const config = {
    apiKey: "AIzaSyCY9mhicIGR538ElGQiOqAf3MmHIGRnnU4",
    authDomain: "placestostay-5cc87.firebaseapp.com",
    projectId: "placestostay-5cc87",
    storageBucket: "placestostay-5cc87.appspot.com",
    messagingSenderId: "1033804008891",
    appId: "1:1033804008891:web:03cda7837060ee821b889e",
    measurementId: "G-V9Y660RYZW"
};

const app = initializeApp(config);

export const firebase = getFirestore(app);
