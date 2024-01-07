
import { useState, useEffect, useRef } from "react";


import {query, collection, orderBy, onSnapshot} from 'firebase/firestore';
import { db } from "../../../firebase";




const Chat = () => {
    //creamos un estado para recuperar el chat desde la base de datos
    const [message, setMessages] = useState([]);

    //hacemos una llamada a la bd con un useEffet
    //creamos una variable le pasamos la query con parametro la collecion y hacemos llamado y el nombre de la collecion y por ultimo el order para ordernarlo por tiempo
    useEffect(()=>{
        const newQuery = query(collection(db, 'messages'),orderBy('timestamp'));

        //ahora creamos otra constante le pasamos el onsnapshot para recuperar el newQuery
        //con el parametro de querysnapshot recuperamos toda la informacion
        const unsubscribe = onSnapshot(newQuery, (querySnapshot)=>{
            let currentMessages = [];
            querySnapshot.forEach(item =>{
                console.log(item)
            })
        })
    })


  return (
    <section className="chat-content">
        <h4>this is a message</h4>
    </section>
  )
}

export default Chat