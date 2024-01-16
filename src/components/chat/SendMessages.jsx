import { useState } from "react"
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import {db, auth} from "../../../firebase";  
import EmojiPicker from 'emoji-picker-react';


const SendMessages = () => {
    const [inputMessage, setInputMessage]= useState("");
    const [open, setOpen] = useState('close');
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

    const emoji = () => {
      setOpen('open');
  }
  const closeEmoji = () => {
      setOpen('close');
  }
  const onEmojiClick = (event, emojiObject) => {
    setInputMessage(`${inputMessage}${emojiObject.emoji}`)
};
  return (
    <form action="" onSubmit={SendMessages} >
      <button 
                type="button" 
                className="btn-emoji"
                onClick={emoji}>
                   <i className="bi bi-emoji-smile-fill"></i>
            </button>
            <div className={open}>
                <button 
                    className="close-emoji" 
                    onClick={closeEmoji}
                    type="button">
                        <i className="fa-solid fa-circle-xmark"></i>
                </button>
                <EmojiPicker onEmojiClick={onEmojiClick}/>
            </div>
        <input type="text"                  
        placeholder="Ingrese su mensaje"
        value={inputMessage}
        onChange={e=>setInputMessage(e.target.value)}
        className="SendInput" />
        <button
        type="submit"
        className="btn btn-primary">

    Send<i className="bi bi-send-fill"></i>
        </button>
    </form>
  )
}

export default SendMessages