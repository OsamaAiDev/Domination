import React from "react";

const Button = ({ title, color }) => {
  return (
    <>
      <button
        className={`${color} px-3 py-1 text-zinc-100 rounded m-2 text-xs cursor-pointer`}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
