import { useState, useContext } from "react";
import { context as authContext } from "../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router-dom";

/**
 * @typedef {'display' | 'editing' } phase
 */
export const useCreatePhoto = () => {
  const { createLocalAccount } = useContext(authContext);
  const history = useHistory();
  const { state } = useLocation();

  if (!state || !state.name) history.push("/create/name");

  /**
   * @type {[phase, (newPhase: phase) => void]}
   */
  const [phase, setPhase] = useState("empty");
  const [image, setImage] = useState(null);
  const [alert, setAlert] = useState(null);

  const save = async () => {
    if (!image) return setAlert("noImage");
    setAlert("saving");

    await createLocalAccount(state.name, image);
  };

  const uploadImage = ([file]) => {
    setImage(file);
    setPhase("display");
  };

  const edit = () => {
    setImage(null);
    setPhase("editing");
  };

  return {
    uploadImage,
    phase,
    edit,
    image: image && URL.createObjectURL(image),
    alert,
    save,
  };
};

export default useCreatePhoto;
