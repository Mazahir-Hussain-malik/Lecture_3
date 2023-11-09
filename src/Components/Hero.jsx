import React from "react";
import Button from "./Button";

const Hero = () => {
  let inputStyle = " py-2 px-2 shadow-lg w-full text-[1.3rem] my-4";
  return (
    <>
      <div className="w-[90%] mx-auto grid grid-cols-2  mt-[5rem]">
        <div className="my-auto">
          <h2>WE PROVIDE FAST FOOD</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            ad ex enim tempora consequatur ratione sit facere culpa reiciendis
            ab, ipsa error. Quae nisi praesentium nobis consequatur at illum
            dolor.
          </p>
          <Button text="Order Now" classProps="" />
          <Button text="Book Us" classProps="bg-red-300" />
        </div>
        <div className="bg-[#000] shadow-xl text-center py-2 ">
          <h2 className="text-[3rem] font-semibold">Order here</h2>
          <form action="">
            <input
              type="text"
              placeholder="Enter name...."
              className={`${inputStyle} w-[90%]`}
            />
            <input
              type="text"
              placeholder="enter address ..."
              className={`${inputStyle}`}
            />
            <input
              type="Number"
              placeholder="enter amount ...."
              className={`${inputStyle}`}
            />
            <Button text="Order" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Hero;
