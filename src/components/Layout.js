import React from "react";
import Sidebar from "./Sidebar";
import { FcMenu } from "react-icons/fc";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      {/* Page content */}
      <div className="drawer-content bg-[#FAF9F8] px-8 max-[299px]:px-0 max-md:px-0 max-lg:px-0 min-h-screen">
        <div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost drawer-button lg:hidden"
          >
            <FcMenu fontSize={24} />
          </label>
        </div>
        <Outlet />
      </div>
      {/* Drawer */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidebar />
      </div>
    </div>
  );
}

export default Layout;
