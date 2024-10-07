import {initializeApp} from "firebase/app";
import {getFireStore} from "firebase/firestore";

const config = {
    apiKey : "",
    authDomain : "",
    projectId : "",
    storageBucket : "",
    messagingSenderid : "",
    appId : "",
    measurementId : ""
};

const app = initializeApp(config);

export const firebase = getFireStore(app);