import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../shared/Sidebar";
import Header from "../shared/Header";

const ProblemsLayout = () => {
  const navbarItems = [
    { title: "Home", url: "/home" },
    // { title: "About", url: "/about" },
    // { title: "Contact Us", url: "/contact-us" },
    { title: "Problems", url: "/problems/home" },
  ];
  const sidebarItems = [
    { title: "Star Rating", url: "/star-rating" },
    { title: "Accordian", url: "/accordian" },
  ];
  return (
    <div className="">
      <div className="">
        <Header items={navbarItems} />
      </div>
      <div className="main-content bg-teal-400 grid grid-cols-5">
        <div className="col-span-1 p-1">
          <Sidebar items={sidebarItems} />
        </div>
        <div className="bg-red-200 col-span-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProblemsLayout;
