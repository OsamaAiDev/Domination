import React from "react";

const Card = ({ values, handleClick, index }) => {
  const { name, profession, image, isFriend } = values;
  return (
    <div className="bg-white w-72 rounded">
      <div className="w-full h-52 bg-zinc-100">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="p-3 w-full">
        <h3 className="font-semibold text-xl">{name.toUpperCase()}</h3>
        <h5 className="text-xs">{profession.toUpperCase()}</h5>
        <button
          className="px-3 py-1 text-zinc-100 bg-blue-600 cursor-pointer rounded mt-3"
          onClick={() => {
            handleClick(index);
          }}
        >
          {isFriend ? "Friend" : "Add Friend"}
        </button>
      </div>
    </div>
  );
};

export default Card;
