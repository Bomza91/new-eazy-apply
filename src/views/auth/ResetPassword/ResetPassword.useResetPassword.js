import { useState, useContext } from "react";
import validator from "validator";
import { useHistory } from "react-router";
import { users } from '../../../api/users'

export const useResetPassword = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(null);

  const send = async () => {
    if (!email || email.length < 1) return setAlert("noEmail");
    if (!validator.isEmail(email)) return setAlert("formatEmail");

    setAlert("checking");
    await users.reset(email);
    history.push("/auth/sent");
  };
  return {
    email,
    setEmail,
    send,
    alert,
  };
};

export default useResetPassword;
