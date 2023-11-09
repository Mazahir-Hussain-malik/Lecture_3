import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        className={`${props.classProps}  py-[0.5rem] px-[3rem]
      text-[1.4rem] border-2 bg-yellow-300`}
      >
        {props.text}
      </button>
    </>
  );
};

export default Button;
