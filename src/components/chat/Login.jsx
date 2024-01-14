import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { auth } from "../../../firebase";


const Login = () => {
    
   
    
    const handleLogin = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }
  return (
    <>
    <button className="btn-login"
    onClick={handleLogin}>
      <i className="bi bi-google"></i>
        Sing in with google
    </button>
    </>
  )
}

export default Login