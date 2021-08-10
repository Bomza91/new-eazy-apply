// import { useState } from "react";
// import validator from 'validator';

// export const useNewAccount = () => {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [confirmPassword, setConfirmPassword] = useState('')
//     const [alert, setAlert] = useState(null)
//     const [creating, setCreating] = useState(false)

//     const createAccount = () => {
//         if (!email || email.length < 1) return ('noEmail')
//         if (!password || password.length < 1) return ('noPassword')
//         if (!confirmPassword || confirmPassword.length < 1) return ('noConfirmPassword')

 

//         if (!validator.isEmail(email)) return setAlert('formatEmail')
//         if (password.length < 8) return setAlert('shortPassword')
//         if (confirmPassword.length < 8) return setAlert('shortConfirmPassword')

//         if (password !== confirmPassword) return setAlert('mismatchPasswords')
//         setAlert('creating')
//     }

//     return {
//         email,
//         password,
//         confirmPassword,
//         setEmail,
//         setPassword,
//         setConfirmPassword,
//         createAccount,
//         alert,
//         setAlert,
//         creating,
//         setCreating,


//     }
// }

// export default useNewAccount;


import { useState, useContext } from "react";
import validator from "validator";
import { useHistory } from "react-router-dom";
import GoTrue from "gotrue-js";
import { context as authContext } from "../../hooks/useAuth";

const auth = new GoTrue({
  APIUrl:'',
  audience:'',
  setCookie:false,

})

export const useNewAccount = () => {
  const { createAccount: authCreatAccount } = useContext(authContext)
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [alert, setAlert] = useState(null);
  

  const createAccount = async () => {
    if (!email || email.length < 1) return setAlert("noEmail") ;
    if (!password || password.length < 1) return setAlert("noPassword");
    if (!confirmPassword || confirmPassword.length < 1)
      return setAlert("noConfirmPassword ") ;

    if (!validator.isEmail(email)) return setAlert("formatEmail");
    if (password.length < 8) return setAlert("ShortPassword");
    if (confirmPassword.length < 8) return setAlert("shortConfirmPassword");

    if (password !== confirmPassword)
      return setAlert("misMatchConfirmPassword");
      setAlert('creating')
      const response = await auth.signup(email,password);
      console.log(response)

      const [success, code] = await authCreatAccount(email, password)

      if (!success){
        return setAlert(code)
      }
      history.push('/auth/sent')
  };
  return {
    email,
    password,
    confirmPassword,
    setEmail,
    setPassword,
    setconfirmPassword,
    createAccount,
    alert
  };
};
export default useNewAccount;
