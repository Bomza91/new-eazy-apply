import GoTrue from "gotrue-js";
// import { openDB } from "idb";
// import {v4 as createId} 'uuid';
import { createDbStore } from '../../utils/createDbStore';
import '../../types/Users'

const auth = new GoTrue({
  APIUrl: "",
  audience: "",
  setCookie: false,
});

const db = createDbStore('user', ['activity'])

const createUsers = () => {
  /**
   * @param {string} email
   * @param {string} password
   * @returns {Promise<[boolean, {id: string} |'noAccount' | 'technical']}
   */
  const signInOnline = async (email, password) => {
    try {
<<<<<<< HEAD
      const db = await dbRequest;
      const { id, token } = await auth.login(email, password);

      await db.put("meta", { id: "current", value: id });
      await db.put("meta", { id: "accessToken", value: token.access_token });
=======
      const { id } = await auth.login(email, password);

      await db.setMeta('current', id)
      await db.setMeta('accessToken', token.access_token)
>>>>>>> main

      return [true, {id}];
    } catch (error) {
      const errorAsString = error.toString();

      if (
        errorAsString ===
        "JSONHTTPError: A user with this email address has already been registered"
      ) {
        return [false, "noAccount"];
      }
      if (
        errorAsString ===
        "JSONHTTPError: A user with this email address has already been registered"
      ) {
        return [false, "notVerified"];
      }

      return [false, "techinal"];
    }
  };
  /**
   * @param {string} token
   * @returns {Promise<[boolean, {id: string} | 'technical']>}
   */
  const signInOnlineWithToken = async (token) => {
    try {
      const { id: netlifyId } = await auth.confirm(token);
      const result = db.search((singleUser) => singleUser.netlifyId === netlifyId)

      const newUserData = {
        ...result,
        type: 'online',
        netlifyId,
      }

<<<<<<< HEAD
     let cursor = await db.transaction('data').store.openCursor();
     let result = null;

     while (cursor && result === null) {
       if (cursor.value.netlifyId === id) {
         result = cursor.value;
       }

       cursor = await cursor.continue();
     }
      
     console.log(result)

      return [true, { id }];
=======
      await db.update(newUserData)
      // await dbStore.setMeta('current', id)
      await db.setMeta('accessToken', token.access_token)

   return [ true, newUserData];
>>>>>>> main
    } catch (error) {
      return [false, 'technical';]
    }
  }
  
    /**
   * @param {string} token
   * @returns {Promise<[boolean, {id: null} | 'technical']>}
   */
<<<<<<< HEAD
     const signInOnlineWithRecovery = async (token) => {
=======
  
     const signInOnliWithRecovery = async (token) => {
>>>>>>> main
      try {
        const { id } = await auth.recoveryToken(token);
<<<<<<< HEAD
  
        await db.put('data', newAccount)
        await db.put("meta", { id: "current", value: id });
      
        return [true, { id }];
=======
        await db.setMeta("current",id);
        return [true, {id}];
>>>>>>> main
      } catch (error) {
        return [false, "technical"]
      }
    };
  /**
   * @param {string} name
   * @param {Blob} image
   */
<<<<<<< HEAD
  const changeToOnlineAccount = async (id, email, password) => {
    try {
      const db = await dbRequest;
      const { id } = await getCurrent();
      const { id: netlifyId } = await auth.signup(email, password);
      console.log(netlifyId, id)

      const newUserData = {
        ...currentUser, 
        netlifyId, 
        email, 
        type: 'verifying' 
      }

      await db.put("data", newUserData);

      await signInOnline(email, password);
      return [true, { id }];
    } catch (error) {
=======

  const createLocalAccount = async (name, image) => {
    const id = db.generateId()

    const newAccount = {
      id,
      name,
      image,
      activity: new Date(),
      type: 'local'
    }
    await db.add(newAccount)
    await db.setMeta('current',id);

    return [true, newAccount];
  }

  /**
   * 
   * @param {string} email 
   * @param {string} password 
   * @returns {Promise<[boolean, {id: string} | 'emailAlreadyUsed | 'technical']>}
   */
  const createAccount = async (email, password) => {
    try {
      const currentUser = await getCurrent();
      const { id: netlifyId } = await auth.signup(email, password);

      const newUserData = {
        ...currentUser,
        netlifyId,
        email,
        type: 'verifying'
      }
      await db.update(newUserData);
       return [true, newUserData];
    } catch (error){
>>>>>>> main
      const errorAsString = error.toString();

      if (
        errorAsString ===
        "JSONHTTPError: A user with this email address has already been registered"
      ) {
        return [false, "emailAlreadyUsed"];
      }
      return [false, "technical"];
    }
  };

  /**
   * @returns {Promise<null | { id: string}>}
   */

  const getCurrent = async () => {

    const current = await db.getMeta("current");

    if (!current) return null;

    const response = await db.read(current);
    return response;
  };
  /**
   * @returns {Promise<{ id: string}[]>}
   */
  const getUsers = async () => {
    return await db.search(true, { count: 20, sorting: 'activity'});
  };
  /**
   *
   * @param {string} email
   * @returns {[boolean]}
   */
  const resetOnlinePassword = async (email) => {
    await auth.requestPasswordRecovery(email);
    return [true];
  };

  /**
<<<<<<< HEAD
   * 
   * @param {string} email
=======
   * @param {string} id
   * @returns {Promise<[boolean, null | 'technical']>}
   */

   const signInLocal = async (id) => {
     try {
       await db.setMeta('current', id);

       const currentUser = await users.getCurrent();
       return [true, currentUser];
     } catch (error) {
       return [false, 'technical'];
     }
     }
   
  /**
>>>>>>> main
   * @returns {Promise<[boolean, null | 'technical']>}
   */
  const signOut = async () => {
    try {
      await db.setMeta("current", null);
      return [true, null];
    } catch (error) {
      return [false, "technical"];
    }
  };
 const cancelVerification = async () => {
   const user = await getCurrent();

   const response = await db.update({
     ...user,
     type: 'local',
   });
   return response;
 }
  return {
    getCurrent,
    getUsers,
<<<<<<< HEAD
    changeToOnlineAccount,
    signInOnline,
    signInOnlineWithToken,
    signOut,
    resetOnlinePassword,
    signInOnlineWithRecovery,
=======
    createAccount,
    signInOnline,
    signInWithToken,
    signInLocal,
    cancelVerification,
    signOut,
    resetOnlinePassword,
    signInOnliWithRecovery,
    createLocalAccount,
>>>>>>> main
  };
};

export const users = createUsers();
export default users;
