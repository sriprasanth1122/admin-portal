import React from "react";
import { Link } from "react-router-dom";

function Product() {
  const products = [
    {
      id: 1,
      name: "Samsung",
      model: "SAU2345",
      seller: "Chennai",
      mfd: "2022/04/25",
      price: 170800,
      offerprice: 120800,
    },
    {
      id: 2,
      name: "LG",
      model: "LGU75345",
      seller: "Chennai",
      mfd: "2021/04/25",
      price: 189350,
      offerprice: 150800,
    },
  ];
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Products</h1>
        <Link
          to="/"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create Product
        </Link>
      </div>

      {/* <!-- DataTales Example --> */}
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
                  <th>Name</th>
                  <th>Model</th>
                  <th>Seller</th>
                  <th>Manuf-Date</th>
                  <th>Price</th>
                  <th>Offer-Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Model</th>
                  <th>Seller</th>
                  <th>Manuf-Date</th>
                  <th>Price</th>
                  <th>Offer-Price</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {products.map((product) => {
                  return (
                    <tr>
                      <td>{product.name}</td>
                      <td>{product.model}</td>
                      <td>{product.seller}</td>
                      <td>{product.mfd}</td>
                      <td>{product.price}</td>
                      <td>{product.offerprice}</td>
                      <button className="btn btn-sm btn-warning mr-2">
                        View
                      </button>
                      <button className="btn btn-sm btn-info mr-2">Edit</button>
                      <button className="btn btn-sm btn-danger mr-2">
                        Delete
                      </button>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
