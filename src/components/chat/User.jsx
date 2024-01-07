import LogOut from "./LogOut"
import Login from "./Login"
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from "../../../firebase";




const User = () => {
    const [ user ] = useAuthState(auth);
  return (
    <div className="ms-2">
        {user? <LogOut/> : <Login/> }
        
        
    </div>
  )
}

export default User