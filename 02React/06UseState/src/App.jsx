import { useState } from "react";
import "./App.css";
import AddingProp from "./AddingProp";
import UpdateArray from "./UpdateArray";
import UpdateArray2 from "./RemoveEven";
import RemoveEven from "./RemoveEven";
import ArrayAddition from "./ArrayAddition";
const App = () => {
  // const [val, setVal] = useState({ name: "osama", isBanned: false });
  return (
    // <div className="p-4">
    //   <h1>name : {val.name}</h1>
    //   <h2>banned : {val.isBanned.toString()}</h2>
    //   <button
    //     onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
    //     className={`px-3 py-1 ${
    //       val.isBanned ? "bg-blue-600" : "bg-red-600"
    //     } text-white rounded-full text-sm`}
    //   >
    //     Change
    //   </button>
    // </div>
    // <AddingProp />
    // <UpdateArray2 />
    // <RemoveEven />
    <ArrayAddition />
  );
};

export default App;
