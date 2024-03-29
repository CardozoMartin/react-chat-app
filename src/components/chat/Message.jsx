import {auth} from "../../../firebase";  

const Message = ({ message }) => {
  let newStyles = '';
  //ponemos una condicion para verificar si hay un usuario se agrega una clase 
  if (auth.currentUser) {
      if (message.uid === auth.currentUser.uid ) {
        //si estoy logueado se agrega esta clase marcando diferencia en mis mensajes
          newStyles = 'my-message';
      } else {
        //si no estoy logueado se marca la clase para diferenciar lo mensajes
          newStyles = 'message';
      }
  } else {
      newStyles = 'message';
  }
  
  const date = new Date(message.timestamp?.seconds*1000);
  const options = { 
      month: 'long', 
      day: 'numeric' 
  };
  let h = date.getHours();
  let m = date.getMinutes();
  let time = h + ":" + m;

  const newDate = date.toLocaleDateString('en-US', options);
  return ( 
      <article className={newStyles}>
          <div>
              <div className='text-message'>
                  <p className="text mt-2">{ message.text }</p>
              </div>
              <p className="user">{`${newDate} - ${time}`}</p>
          </div>
          <img src={message.photo} alt="user photo" />
      </article>
   );
}

export default Message