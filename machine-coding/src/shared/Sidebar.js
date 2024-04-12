import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ items }) => {
  return (
    <div className="w-full h-full">
      {items.map((item, i) => {
        return (
          <div key={i} className="m-1 bg-slate-100 text-center">
            <NavLink to={item.url}>
              <span className="">{item.title}</span>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
