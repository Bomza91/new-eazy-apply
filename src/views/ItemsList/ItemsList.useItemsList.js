import { useContext, useState } from "react";
import { useMount } from "react-use";
import { institutions } from "../../api/institutions"
import { context as authContext } from "../../../hooks/useAuth";
import "../../types/Institution";


export const useItemsList = () => {
  const { user, signOut } = useContext(authContext);
  const [institution, setInstitution] = useState("")
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [Province, setProvince] = useState("");
  const [website, setWebsite] = useState("");
  const [type, setType] = useState("");

  /**
   * @type {[institution[], (newValue: institution[]]) => void}
   */
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState(null);


  /**
   * @type {Record<Exclude<shootKey, 'id'>, (newValue: any) => void}
   */
  const updateFns = {
    institution: setInstitution,
    title: setTitle,
    image: setImage,
    Province: setProvince,
    website: setWebsite,
    type: setType,
    
  };

  /**
   *  @param {instuitutionKey} key
   */
  const update =  (key) => (value) => {
    const fn = updateFns[key];
    fn(value);
  };

  const toggleOverlay = (newValue) => {
    if (newValue === 'open'|| newValue === 'closed') {
      return setOverlay(newValue)
    } 

    setOverlay(overlay === 'open' ? 'closed' : 'open')
  };

  /**
   *
   */
  const submit = async (event) => {
    event.preventDefault();
    if (!title || title.trim() === "")  return setAlert("missingName");

    /** @type {institution} */

    const response = await institution.add({
      institution: setInstitution || null,
    title: setTitle || null,
    image: setImage || null,
    Province: setProvince || null,
    website: setWebsite || null,
    type: setType || null,
    });

    setList([response, ...list]);
  };

  useMount(async () => {
    const result = await institution.search(true, {
      sorting: "title",
      reverse: true,
    });

    setList(result);

    //   shoots.add({
    //     date: new Date(),
    //     location: "Cape Town",
    //     name: "Namhla",
    //     surname: "Mthi",
    //     priceInCents: "3000",
    //   });
    //
  });

  return {
    update,
    institution,
    title,
    image,
    Province,
    website,
    type,
    signOut,
    submit,
    list,
    alert,
    overlay,
    toggleOverlay
  };
};
