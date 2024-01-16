import { toast } from "sonner";
import { auth } from "../../../firebase";
import { signOut} from "firebase/auth";
import Swal from "sweetalert2";


const LogOut = () => {
    const handleLogout  = ()=>{
      Swal.fire({
        title: "Attention",
        text: "You are about to log out",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, log out",
        cancelButtonText: "Cancel",
      }).then((res) => {
        if (res.isConfirmed) {
          toast.success("Session closed successfully. See you later!");
          signOut(auth)
  
          
        }
      });
    };
        
    
  return (
    <>
    <button className='btn btn-danger' onClick={handleLogout}>
    <i className="bi bi-google fs-5"></i>  LogOut
    </button>
    </>
  )
}

export default LogOut