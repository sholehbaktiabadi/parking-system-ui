import React from "react";

export const Drawer: React.FC<any> = ({ props }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
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
            <p className="font-bold">Visitor</p>
          <li>
            <a>Car</a>
          </li>
          <li>
            <a>Scooter</a>
          </li>
          <li>
            <a>Citizen</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
