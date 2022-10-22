import {initializeApp, cert, getApps} from "firebase-admin/app";//1
import { getFirestore} from "firebase-admin/firestore";

import serviceAccount from "../secret.js"

export function dbConnect(){
    if(!getApps().length){
        initializeApp({
            credential: cert(serviceAccount)
        })
    }
    return getFirestore()
}
