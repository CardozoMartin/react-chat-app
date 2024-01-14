import { useState } from "react"
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import {db, auth} from "../../../firebase";  


const SendMessages = () => {
    const [inputMessage, setInputMessage]= useState("");

    const SendMessages = async(e)=>{
        e.preventDefault();

        const {uid, displayName, photoURL } = auth.currentUser;
        await addDoc(collection(db, 'messages'),{
            text: inputMessage,
            name : displayName,
            uid,
            photo: photoURL,
            timestamp: serverTimestamp(),
        })
        setInputMessage("");
    }
  return (
    <form action="" onSubmit={SendMessages}>
        <input type="text"
        placeholder="Ingrese su mensaje"
        value={inputMessage}
        onChange={e=>setInputMessage(e.target.value)} />
        <button
        type="submit">

        </button>
    </form>
  )
}

export default SendMessages