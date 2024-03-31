"use client";
import React from "react";
import { useState } from "react";

const Header = () => {
  const [menuList, setMenuList] = useState(false);
  const handleClick = () => {
    setMenuList(!menuList);
  };

  return (
    <header className="p-2 fixed flex justify-between w-full z-30">
      <div
        onClick={handleClick}
        className="flex justify-end w-full md:hidden cursor-pointer z-50"
      >
        {menuList ? (
          "X"
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </div>
      <div className="hidden md:flex"></div>
      <ul className="hidden md:flex gap-3 text-[12px] font-bold">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      {menuList && (
        <div className="border-2 md:hidden w-full fixed z-50 top-10 left-0 right-0 shadow-xl bg-slate-100">
          <ul className="flex flex-col items-end gap-3 mx-auto p-6 mr-6 text-[12px] font-extrabold">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
