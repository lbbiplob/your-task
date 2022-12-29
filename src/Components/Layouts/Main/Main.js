import React from "react";
import { Outlet } from "react-router-dom";
import Menubar from "../../Pages/Shared/Navbar/Menubar";

const Main = () => {
  return (
    <div>
      <Menubar></Menubar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
