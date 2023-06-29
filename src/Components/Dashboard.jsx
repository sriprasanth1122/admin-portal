import React from "react";
import Card from "./Card";

function Dashboard() {
  const card = [
    {
      title: "EARNINGS (MONTHLY)",
      price: "$40000",
      theme: "primary",
    },
    {
      title: "EARNINGS (ANNUAL)",
      price: "$215000",
      theme: "success",
    },
    {
      title: "TASKS",
      price: "50 %",
      theme: "info",
    },
    {
      title: "PENDING REQUESTS",
      price: "18",
      theme: "warning",
    },
  ];
  return (
    <div>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <a
            href="#"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-download fa-sm text-white-50"></i> Generate
            Report
          </a>
        </div>
        <div className="row">
          {card.map((wm) => {
            return <Card card={wm}></Card>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
