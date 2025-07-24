import React from "react";
import { useState } from "react";

const AddingProp = () => {
  const [val, setVal] = useState({ name: "osama", age: 28 });
  return (
    <div>
      <button
        onClick={() => {
          setVal({ ...val, gender: "Male" });
          // no updated val because state update after func completation
          console.log(val);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default AddingProp;
