import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
const Card = () => {
  const [val, setVal] = useState(false);
  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className="relative w-60 h-32 bg-zinc-500 rounded-md overflow-hidden flex">
        <img
          src="https://plus.unsplash.com/premium_photo-1673264933452-b46f800c5797?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className={`shrink-0 transition-transform duration-300 ease-in-out ${
            !val ? "-translate-x-[0%]" : "-translate-x-[100%]"
          }  w-full h-full object-fit-cover`}
        />
        <img
          src="https://images.unsplash.com/photo-1517825738774-7de9363ef735?q=80&w=1110&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className={`shrink-0 transition-transform duration-300 ease-in-out ${
            !val ? "-translate-x-[0%]" : "-translate-x-[100%]"
          }  w-full h-full object-fit-cover`}
        />
        <span
          onClick={() => setVal(() => !val)}
          className="absolute w-10 h-10 left-1/2 bottom-[10%] bg-[#dadada7b] -translate-x-[50%] flex items-center justify-center rounded-full"
        >
          <FaArrowRight />
        </span>
      </div>
    </div>
  );
};

export default Card;
