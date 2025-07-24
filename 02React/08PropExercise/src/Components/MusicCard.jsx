import React from "react";

const MusicCard = ({ values, handleClick, index }) => {
  let { img, name, artist, isAdded } = values;
  return (
    <div className="w-60 rounded-md bg-zinc-100 p-4 pb-10 flex gap-4 relative mt-10">
      <div className="w-20 h-20 bg-orange-600 rounded-md overflow-hidden">
        <img src={img} alt="" className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="font-semibold leading-none text-2xl">{name} </h3>
        <h4 className="text-xs">{artist} </h4>
      </div>
      <button
        onClick={() => {
          handleClick(index);
        }}
        className={`px-4 py-3 ${
          isAdded ? "bg-orange-600" : "bg-teal-600"
        } absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] text-white rounded-full text-xs whitespace-nowrap cursor-pointer`}
      >
        {isAdded ? "Added" : "Add to Favoruites"}
      </button>
    </div>
  );
};

export default MusicCard;
