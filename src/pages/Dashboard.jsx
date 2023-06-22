import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import Widget from "../components/widget/Widget";
import Chart from "../components/charts/Chart";
import BarChart from "../components/charts/BarChart";

import "./style.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboardContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="Revenues" />
          <Widget type="Transactions" />
          <Widget type="Likes" />
          <Widget type="Users" />
        </div>
        <div className="chart">
          <Chart />
        </div>
        <div className="bottom-container">
          <BarChart />
          <div className="schedule-container">
            <div className="heading">
              <span className="main">Today's schedule</span>
              <span className="sub">See all</span>
            </div>
            <div className="details-section">
              <div className="details">
                <div className="color-div" style={{backgroundColor: "lightgreen", height: "30px", width: "5px", marginRight: "10px"}}></div>
                <div className="info">To go through Revenues once.</div>
              </div>
              <div className="details">
                <div className="color-div" style={{backgroundColor: "lightblue", height: "30px", width: "5px",  marginRight: "10px"}}></div>
                <div className="info">
                  To analyse the Transactions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
