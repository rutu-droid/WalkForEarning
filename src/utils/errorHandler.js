import { toast } from "react-toastify";

export const errorHandler = (e) => {
  console.log(e)
  if ( e.event === "noNetwork" && e.code === "NETWORK_ERROR")
  {
    console.log("Could not detect network. Please check your network connection.");
  }else{
    return toast.error(
      e?.reason ? e?.reason : e.error?.message ? e.error?.message : e?.message,
      { autoClose: 6000 }
    );
  }
 
};
