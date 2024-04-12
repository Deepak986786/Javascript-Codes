import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ items }) => {
  return (
    <div className="grid grid-cols-2  h-16 w-full items-center shadow-lg">
      <div className="logo text-center">
        <h1>
          <span className="font-mono font-thin">Machine</span>Coding
        </h1>
      </div>
      <div className="menu-items flex flex-row">
        {items.map((item, i) => {
          return (
            <div key={i}>
              <NavLink to={item.url}>
                <span className="ml-12 rounded-sm pl-4 pr-4 p-1">
                  {item.title}
                </span>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
