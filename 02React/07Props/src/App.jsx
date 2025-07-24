import React, { useState } from "react";
import "./App.css";
import Button from "./Button";
import Card from "./Card";

const App = () => {
  const data = [
    {
      name: "osama",
      profession: "teacher",
      isFriend: false,
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "bilal",
      profession: "none",
      isFriend: false,
      image:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "rehman",
      profession: "shop owner",
      isFriend: false,
      image:
        "https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "nawaz",
      profession: "salesman",
      isFriend: false,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const [realData, setRealData] = useState(data);
  const handleFriendBtn = (cardIndex) => {
    setRealData((prev) => {
      return prev.map((item, index) => {
        if (index == cardIndex) {
          return { ...item, isFriend: !item.isFriend };
        }
        return item;
      });
    });
  };

  return (
    <div className="w-full h-screen bg-zinc-300 flex gap-3 items-center justify-center">
      {/* <Button title="Know More" color="bg-red-600" />
      <Button title="Download" color="bg-blue-400" /> */}
      {realData.map((item, index) => (
        <Card
          values={item}
          index={index}
          key={index}
          handleClick={handleFriendBtn}
        />
      ))}
    </div>
  );
};
export default App;
