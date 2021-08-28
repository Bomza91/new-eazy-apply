import { useContext, useState } from "react";
import { useMount } from "react-use";
import { shoots } from "../../../api/shoots";
import { context as authContext } from "../../../hooks/useAuth";
import "../../../types/shoot";

export const useItemsList = () => {
  const { user, signOut } = useContext(authContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [priceInCents, setPriceInCents] = useState("");

  /**
   * @type {[Shoot[], (newValue: Shoot[]]) => void}
   */
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState(null);

  /**
   * @type {Record<Exclude<shootKey, 'id'>, (newValue: any) => void}
   */
  const updateFns = {
    date: (dateString) => setDate(new Date(dateString)),
    location: setLocation,
    name: setName,
    priceInCents: setPriceInCents,
    surname: setSurname,
  };

  /**
   *  @param {shootKey} key
   */
  const update = (key) => (value) => {
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
    if (!name || name.trim() === "") return setAlert("missingName");
    if (!surname || surname.trim() === "") return setAlert("missingSurname");

    /** @type {Shoot} */
    const response = await shoots.add({
      date: date || null,
      location: location || null,
      name: name || null,
      priceInCents: priceInCents || null,
      surname: surname || null,
    });

    setList([response, ...list]);
  };

  useMount(async () => {
    const result = await shoots.search(true, {
      sorting: "priceInCents",
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
    date: date ? `${formatDate(date, 'yyyy-MM-dd')}T${formatDate(date, 'hh:mm')}` : '',
    update,
    location,
    name,
    priceInCents,
    surname,
    user,
    signOut,
    submit,
    list,
    alert,
    overlay,
    toggleOverlay
  };
};
