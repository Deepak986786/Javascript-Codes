import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header";

const HomeLayout = () => {
  const navbarItems = [
    { title: "Home", url: "/home" },
    // { title: "About", url: "/about" },
    // { title: "Contact Us", url: "/contact-us" },
    { title: "Problems", url: "/problems/home" },

  ];
  return (
    <>
      <Header items={navbarItems} />
      <div>HomeLayout</div>
      <Outlet />
    </>
  );
};

export default HomeLayout;
