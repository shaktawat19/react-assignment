import React from "react";
import { Link } from "react-router-dom";
import "../../pages/style.scss";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Board.</span>
        </Link>
      </div>
      <div className="bottom">
        <div>
          <ul>
            <li>
              {/* <DashboardIcon className="icon" /> */}
              <span>Dashboard</span>
            </li>
            <li>
              {/* <PersonOutlineIcon className="icon" /> */}
              <span>Transactions</span>
            </li>
            <li>
              {/* <StoreIcon className="icon" /> */}
              <span>Schedules</span>
            </li>
            <li>
              {/* <CreditCardIcon className="icon" /> */}
              <span>Users</span>
            </li>
            <li>
              {/* <LocalShippingIcon className="icon" /> */}
              <span>Settings</span>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <span>Help</span>
            </li>
            <li>
              <span>Contact Us</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
