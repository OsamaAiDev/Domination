import React from "react";

const Songs = () => {
  const data = [
    {
      name: "Maiya Ve",
      desc: "Lorem ipsum dolor sit.",
    },
    {
      name: "Sapna Re",
      desc: "Lorem ipsum dolor sit.",
    },
    {
      name: "Phr Ura",
      desc: "Lorem ipsum dolor sit.",
    },
  ];

  let handleClickDownload = () => alert("Working");

  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col gap-4 items-center justify-center ">
      {data.map((song, index) => (
        <div className="song w-60 px-3 py-2 bg-zinc-100 rounded" key={index}>
          <h3 className="font-semibold text-xl">{song.name}</h3>
          <p className="text-sm mt-2">{song.desc}</p>
          <button
            onClick={handleClickDownload}
            className="px-4 py-2 bg-blue-400 text-xs font-semibold text-zinc-100 rounded-md mt-3"
          >
            Download Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Songs;
