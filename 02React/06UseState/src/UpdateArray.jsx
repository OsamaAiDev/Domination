import React from "react";
import { useState } from "react";

const UpdateArray = () => {
  let [val, setVal] = useState([1, 2, 4, 5, 6]);
  return (
    <div className="p-5">
      {val.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
      <button
        onClick={() =>
          setVal(() => {
            // removing last element from val array on btn click
            return val.filter((item, index) => index != val.length - 1);
          })
        }
        className="px-2 py-1 text-white text-xs rounder-ful bg-blue-600"
      >
        Remove Last item
      </button>
    </div>
  );
};

export default UpdateArray;
