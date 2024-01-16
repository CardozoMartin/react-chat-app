import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { auth } from "../../../firebase";


const Login = () => {
    
   
    
    const handleLogin = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }
  return (
    <>
    <button className="btn btn-primary"
    onClick={handleLogin}>
      <i className="bi bi-google me-2"></i> 
         Sing in with google
    </button>
    </>
  )
}

export default Login