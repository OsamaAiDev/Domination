import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import MusicCard from "./Components/MusicCard";
const App = () => {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1621732560007-ac654b4b3b6a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Challenger",
      artist: "Osama",
      isAdded: false,
    },
    {
      img: "https://images.unsplash.com/photo-1621732560007-ac654b4b3b6a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Meaw",
      artist: "Ali",
      isAdded: false,
    },
    {
      img: "https://images.unsplash.com/photo-1632487123512-d646c202acc2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Leave me like you do",
      artist: "Rehman",
      isAdded: false,
    },
    {
      img: "https://images.unsplash.com/photo-1642953702322-a5da05d2e36b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Tuna kia kia",
      artist: "Bilal",
      isAdded: false,
    },
  ];
  let [songData, setsongData] = useState(data);

  let handleClick = (songIndex) => {
    setsongData((prev) => {
      return prev.map((song, index) => {
        if (index == songIndex) {
          return {
            ...song,
            isAdded: !song.isAdded,
          };
        }
        return song;
      });
    });
  };
  return (
    <div className="w-full h-screen bg-zinc-300">
      <Navbar data={songData} />
      <div className="px-20 mt-10 flex gap-5 flex-wrap">
        {songData.map((item, index) => (
          <MusicCard
            key={index}
            values={item}
            index={index}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
