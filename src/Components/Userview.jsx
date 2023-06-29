import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Userview() {
  const params = useParams();
  console.log(params);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  let loadUser = async () => {
    try {
      let user = await axios.get(
        `https://631d6ffb789612cd07aa9be7.mockapi.io/users/${params.id}`
      );
      console.log(user.data);
      setUserData(user.data);
    } catch (error) {}
  };
  return (
    <>
      <h1>{`User-Id : ${params.id}`}</h1>
      <h4>{userData.name}</h4>
      <h4>{userData.position}</h4>
      <h4>{userData.office}</h4>
      <h4>{userData.startdate}</h4>
      <h4>{userData.salary}</h4>
    </>
  );
}

export default Userview;
