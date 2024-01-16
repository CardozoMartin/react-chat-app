import LogOut from "./LogOut"
import Login from "./Login"
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from "../../../firebase";
import "../../App.css"




const User = () => {
    const [ user ] = useAuthState(auth);
    const image = user ? user.photoURL : "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png";
    const name = user ? user.displayName : "Name User";
  return (
    <div className="right-side mt-5">
    
      <article className="card-user">
      <img src={image} alt="user Photo" referrerPolicy="no-referrer" />
      <p>{name}</p>
        {user? <LogOut/> : <Login/> }
      </article>
        
        
    </div>
  )
}

export default User