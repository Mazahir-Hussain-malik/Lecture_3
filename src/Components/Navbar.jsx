import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-[90%] mx-auto   items-center">
      <div className="">
        <h2 className="text-[3rem] font-semibold">Logo</h2>
      </div>
      <div className="">
        <ul className="flex gap-[2rem] my-auto">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
          <li>
            <Button text="Login" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
