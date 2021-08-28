// import { useState, useEffect } from 'react';
// import { users } from '../../api/users';
// import { useHistory } from 'react-router-dom';
import { useContext, useState } from "react";
import { useMount } from "react-use";
import institutions, { Institutions } from "../../api/institutions";
import { context as authContext } from "../../hooks/useAuth";

export const useItemsList = () => {
  const { user, signOut } = useContext(authContext);
  const [list, setList] = useState([]);

  // console.log(institutions)
  useMount(async () => {
    const result = await institutions.search(() => true, {
      sorting: "province",
      reverse: true,
    });
    console.log(result);

    institutions.add({
      Institution: "University of Western  Cape",
      province: "Western Cape",
      type: "University",
    });
  });
  return {
    user,
    signOut,
  };
};
