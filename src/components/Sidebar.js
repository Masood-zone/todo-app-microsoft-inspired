import React from "react";
import { FcMenu } from "react-icons/fc";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { NAV_LINKS } from "../data/navdata";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

function Sidebar() {
  return (
    <div className="w-[347px] h-screen bg-[#fff] shadow-lg flex flex-col py-4 max-[399px]:w-[300px] max-[299px]:w-[200px] max-[399px]:py-0 max-[299px]:py-0">
      {/* Top section */}
      <div className="flex items-center justify-between  px-6 max-[399px]:px-0 max-[299px]:px-0">
        <label className="btn btn-ghost drawer-button" htmlFor="my-drawer-2">
          <FcMenu fontSize={24} />
        </label>
        <span className="cursor-pointer">
          <HiOutlineCog8Tooth fontSize={25} />
        </span>
      </div>
      {/* Links */}
      <div className="w-full pt-5 max-[399px]:pt-0 max-[299px]:pt-0">
        <ul className="flex flex-col">
          {NAV_LINKS.map((link) => {
            return <SidebarItem item={link} key={link.id} />;
          })}
        </ul>
      </div>
      {/* Add list section */}
    </div>
  );
}

export default Sidebar;

function SidebarItem({ item }) {
  const linkClasses =
    "flex items-center px-10 w-full h-[54px] justify-start max-[299px]:px-5 max-[399px]:px-5";
  const activeLinkClasses = "bg-[#2564CF] bg-opacity-20";
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? activeLinkClasses : "",
        linkClasses
      )}
    >
      <span className="">{item.icon}</span>
      <span className="pl-5">{item.title}</span>
    </Link>
  );
}
