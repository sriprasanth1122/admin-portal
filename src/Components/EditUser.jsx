import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  let params = useParams();
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      startdate: "",
      salary: "",
    },
    validate: (values) => {
      let errors = {};

      if (values.name === "") {
        errors.name = "Please enter your name";
      }
      if (values.position === "") {
        errors.name = "Please enter your name";
      }

      return errors;
    },
    onSubmit: async (values) => {
      await axios.put(
        `https://631d6ffb789612cd07aa9be7.mockapi.io/users/${params.id}`,
        values
      );
      //   alert("User Updated");
      navigate("/portal/users");
    },
  });

  useEffect(() => {
    loadUser();
  }, []);

  let loadUser = async () => {
    try {
      let user = await axios.get(
        `https://631d6ffb789612cd07aa9be7.mockapi.io/users/${params.id}`
      );
      formik.setValues({
        name: user.data.name,
        position: user.data.position,
        office: user.data.office,
        startdate: user.data.date,
        salary: user.data.salary,
      });
    } catch (error) {}
  };
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label>Name</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.name}
              onChange={formik.handleChange}
              name="name"
            />
            <span>{formik.errors.name}</span>
          </div>
          <div className="col-lg-6">
            <label>Position</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.position}
              onChange={formik.handleChange}
              name="position"
            />
          </div>
          <div className="col-lg-6">
            <label>Office</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.office}
              onChange={formik.handleChange}
              name="office"
            />
          </div>

          <div className="col-lg-6">
            <label>Start-date</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.startdate}
              onChange={formik.handleChange}
              name="startdate"
            />
          </div>
          <div className="col-lg-6">
            <label>Salary</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.salary}
              onChange={formik.handleChange}
              name="salary"
            />
          </div>
          <div className="col-lg-6">
            <input
              className="btn btn-primary mt-2"
              type={"submit"}
              value="Submit"
              disabled={!formik.isValid}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
