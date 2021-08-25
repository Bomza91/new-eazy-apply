import GoTrue from "gotrue-js";
import { openDB } from "idb";

const auth = new GoTrue({
  APIUrl: "",
  audience: "",
  setCookie: false,
});

const createUsersApi = () => {
  const dbRequest = openDB("users", 1, {
    upgrade: (innerDb) => {
      innerDb.createObjectStore("data", { keyPath: "id" });
      innerDb.createObjectStore("meta", { keyPath: "id" });
    },
  });
  /**
   * @param {string} email
   * @param {string} password
   * @returns {Promise<[boolean, null |'notAccount' | 'technical']>}
   */
  const signInOnline = async (email, password) => {
    try {
      const db = await dbRequest;
      const { id, token } = await auth.login(email, password);

      await db.put("meta", { id: "current", value: id });
      await db.put("meta", { id: "accessToken", value: token.access_token });

      return [true, null];
    } catch (error) {
      const errorAsString = error.toString();

      if (
        errorAsString ===
        "JSONHTTPError: A user with this email address has already been registered"
      ) {
        return [false, "notAccount"];
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
   * @returns {Promise<[boolean, null | 'technical']>}
   */
  const signInOnlineWithToken = async (token) => {
    try {
      const db = await dbRequest;
      const { id } = await auth.confirm(token);

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
    } catch (error) {
      return [false, "techinal"];
    }
  };
    /**
   * @param {string} token
   * @returns {Promise<[boolean, null | 'technical']>}
   */
     const signInOnlineWithRecovery = async (token) => {
      try {
        const db = await dbRequest;
        const { id } = await auth.recoveryToken(token);
  
        await db.put('data', newAccount)
        await db.put("meta", { id: "current", value: id });
      
        return [true, { id }];
      } catch (error) {
        return [false, "technical"]
      }
    };
  /**
   * @param {string} email
   * @param {string} password
   * @returns {Promise<[boolean, null |'emailAlreadyUsed' | 'technical']>}
   */
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
    const db = await dbRequest;

    const current = await db.get("meta", "current");

    if (!current || !current.value) return null;

    const response = await db.get("data", current.value);
    return response;
  };
  /**
   * @returns {Promise<{ id: string}[]>}
   */
  const getUsers = async () => {
    const db = await dbRequest;
    return await db.getAll("data");
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
   * 
   * @param {string} email
   * @returns {Promise<[boolean, null | 'technical']>}
   */
  const signOut = async () => {
    try {
      const db = await dbRequest;
      await db.put("meta", { id: "current", value: null });
      return [true, null];
    } catch (error) {
      return [false, "technical"];
    }
  };

  return {
    getCurrent,
    getUsers,
    changeToOnlineAccount,
    signInOnline,
    signInOnlineWithToken,
    signOut,
    resetOnlinePassword,
    signInOnlineWithRecovery,
  };
};

export const users = createUsersApi();
export default users;
