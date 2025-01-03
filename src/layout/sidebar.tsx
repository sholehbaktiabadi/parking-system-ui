import React from "react";
import { NavLink } from "react-router-dom";

export const Drawer: React.FC<any> = ({ props }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-10">
        {props}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <p className="font-bold my-3">New</p>
          <li>
          <NavLink to="/create-car">Car</NavLink>
          </li>
          <li>
          <NavLink to="/create-scooter">Scooter</NavLink>
          </li>

          <p className="font-bold my-3">History</p>
          <li>
          <NavLink to="/finder">Finder</NavLink>
          </li>
          <li>
          <NavLink to="/">Transactions</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
