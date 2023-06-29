import React, { useContext, useState } from "react";
import UserContext from "../UserContext";

function Profile() {
  let context = useContext(UserContext);
  const [name, setName] = useState("");
  let changeProfile = () => {
    context.setUsername(name);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <label htmlFor="">UserName</label>
          <input
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name=""
            id=""
          />
          <button
            onClick={changeProfile}
            className="btn btn-sm btn-primary mt-2"
          >
            Save
          </button>
          {name}
        </div>
      </div>
    </div>
  );
}

export default Profile;
