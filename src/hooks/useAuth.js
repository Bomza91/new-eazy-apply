/*eslint-disable-next-line*/
import React, { useState, createContext, Context } from "react";
import { users } from "../api/users";
import { useMount } from "react-use";

const checkIfConfirm = async () => {
  const { hash } = window.location;
  if (!hash || !hash.startsWith("#/confirmation_token")) return false;
  const tokenValue = hash.replace(/#\/confirmation_token=/, "");
  const response = await users.signInWithToken(tokenValue);
  return response;
};
const checkIfRecover = async () => {
  const { hash } = window.location;
  if (!hash || !hash.startsWith("#/recovery_token")) return false;
  const tokenValue = hash.replace(/#\/recovery_token=/, "");
  const response = await users.signInWithRecovery(tokenValue);
  return response;
}

const useAuthInsideProvider = () => {
  const [user, setUser] = useState(null);

  useMount(async () => {
    const confirm = await checkIfConfirm();
    if (confirm) return setUser(confirm);

    const recovery = await checkIfRecover();
    if (recovery) return setUser(recovery);


    const currentResponse = await users.getCurrent();
    if (currentResponse) return setUser(currentResponse);

    setUser(false);
  });
  const signInOnline = async (email, password) => {
    const [success, payload] = await users.signInOnline(email, password);

    if (success) {
      setUser(payload);
    }
    return [success, payload];
  };

  const changeToOnlineAccount = async (email, password) => {
    const [success, payload] = await users.changeToOnlineAccount(email, password);
    return [success, payload];
  };


  const cancelVerification = () => {
    const [suecces, payload] = await users.cancelVerification()

    if (success) {
      setUser({

      })
    }

    return [success, payload];
  }

  const signInLocal = async (id) => {
    const [success, payload] = await users.signInLocal(id)

    console.log[success, payload]
  }

  const signOut = async () => {
    const [success] = await users.signOut();

    if (success) {
      return false;
    }
    return [success];
  };

  return {
    loading: users === null,
    user,
    signInOnline,
    changeToOnlineAccount,
    signOut,
    signInLocal,
    createLocalAccount,
    cancelVerificationS
  };
};

/**
 * @typedef {object} auth
 * @property {boolean} loading
 * @property {null | false | { id: string}} user
 * @property {(email: string, password: string) => Promise<boolean, any>} signIn
 * @property {(email: string, password: string) => Promise<boolean, any>} createAccount
 * @property {() => Promise<boolean, any>} signOut
 * @property {() => Promise<boolean>} reset
 */

/**
 * @type {Context<auth>}
 */
export const context = createContext();

export const Provider = (props) => {
  const { children } = props;
  const auth = useAuthInsideProvider();
  return <context.Provider value={auth}>{children}</context.Provider>;
};

export default context;
