import { auth } from "../../../firebase";
import { signOut} from "firebase/auth";


const LogOut = () => {
    const logOut = ()=>{
        signOut(auth)
    }
  return (
    <button className='btn-login btn-logout mt-2' onClick={logOut}>
        LogOut
    </button>
  )
}

export default LogOut