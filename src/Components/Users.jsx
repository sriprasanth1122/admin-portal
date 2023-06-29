import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  // const users = [
  //   {
  //     id: 1,
  //     name: "Tiger Nixon",
  //     position: "System Architect",
  //     office: "Edinburgh",
  //     age: "61",
  //     startdate: "2011/04/25",
  //     salary: 320800,
  //   },
  //   {
  //     id: 2,
  //     name: "Michael Bruce",
  //     position: "Javascript Developer",
  //     office: "Singapore",
  //     age: "29",
  //     startdate: "2011/06/27",
  //     salary: 183000,
  //   },
  //   {
  //     id: 3,
  //     name: "Donna",
  //     position: "Customer Support",
  //     office: "New York",
  //     age: "27",
  //     startdate: "2011/01/25",
  //     salary: 112000,
  //   },
  //   {
  //     id: 4,
  //     name: "Snider",
  //     position: "Service",
  //     office: "New York",
  //     age: "27",
  //     startdate: "2011/01/25",
  //     salary: 112000,
  //   },
  // ];

  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    setLoading(true);
    let users = await axios.get(
      "https://631d6ffb789612cd07aa9be7.mockapi.io/users"
    );
    console.log(users.data);
    setUsers(users.data);
    setLoading(false);
  };
  let userDelete = async (id) => {
    try {
      let ask = window.confirm(`Are You Sure? You Want To Delete this Data`);
      if (ask) {
        await axios.delete(
          `https://631d6ffb789612cd07aa9be7.mockapi.io/users/${id}`
        );
        loadData();
      }
    } catch (error) {}
  };

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Users</h1>
        <Link
          to="/portal/creat-user"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create User
        </Link>
      </div>

      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>#S.No</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>

                    <th>Start date</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>#S.No</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>

                    <th>Start date</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {users.map((user, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.position}</td>
                        <td>{user.office}</td>

                        <td>{user.date}</td>
                        <td>{user.salary}</td>
                        <td>
                          <Link
                            to={`/portal/users/${user.id}`}
                            className="btn btn-sm btn-warning mr-2"
                          >
                            View
                          </Link>
                          <Link
                            to={`/portal/user/edit/${user.id}`}
                            className="btn btn-sm btn-info mr-2"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => userDelete(user.id)}
                            className="btn btn-sm btn-danger mr-2"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;

// useState
// Routing

// Context
// UseReducer
// Redux
