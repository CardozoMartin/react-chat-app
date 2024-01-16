import { useState, useEffect } from "react";

import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";
import Message from "./Message";
import SendMessages from "./SendMessages";


const Chat = () => {
  //creamos un estado para recuperar el chat desde la base de datos
  const [messages, setMessages] = useState([]);

  //hacemos una llamada a la bd con un useEffet
  //creamos una variable le pasamos la query con parametro la collecion y hacemos llamado y el nombre de la collecion y por ultimo el order para ordernarlo por tiempo
  useEffect(() => {
    const newQuery = query(collection(db, "messages"), orderBy("timestamp"));

    //ahora creamos otra constante le pasamos el onsnapshot para recuperar el newQuery
    //con el parametro de querysnapshot recuperamos toda la informacion
    const unsubscribe = onSnapshot(newQuery, (querySnapshot) => {
      let currentMessages = [];
      querySnapshot.forEach((item) => {
                           //recuperamos le objeto  //recuperamos el id
        currentMessages.push({ content: item.data(), id: item.id });
      });
      setMessages(currentMessages);

    },[]);
    return unsubscribe;
  });

  return (
    <section className="chat-content mt-5">
      {messages &&
        messages.map((item) => (
          <Message key={item.id} message={item.content} />
        ))}
        <SendMessages/>
    </section>
  );
};

export default Chat;
