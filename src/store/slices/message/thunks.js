import { doc, setDoc, collection } from "firebase/firestore/lite";
import { firebaseDB } from "../../../firebase/config";

export const sendNewMessage = (message) => {
    return async(dispatch) => {
        const newMessage = {
            // name:'test',
            // email:'c.jjeant',
            // message:'Prueba'
            subject:'Doorvel',
            ...message
        }
        const newDoc = doc(collection(firebaseDB, 'messages'))
        await setDoc(newDoc, newMessage)
    }
}