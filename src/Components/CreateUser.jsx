import axios from "axios";
import { useFormik } from "formik";
import React from "react";

function CreateUser() {
  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: "",
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
      let users = await axios.post(
        "https://631d6ffb789612cd07aa9be7.mockapi.io/Users",
        values
      );
      alert("User Created");
    },
  });
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
            <label>Age</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.age}
              onChange={formik.handleChange}
              name="age"
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

export default CreateUser;
