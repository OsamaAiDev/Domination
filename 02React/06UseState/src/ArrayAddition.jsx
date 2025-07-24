import React from "react";
import { useState } from "react";

const ArrayAddition = () => {
  let [employees, setEmployess] = useState([
    { name: "osama", age: 27 },
    { name: "abdullah", age: 26 },
  ]);
  return (
    <div className="p-4">
      {employees.map((employee, index) => (
        <div key={index}>
          <h1>{employee.name}</h1>
          <h1>{employee.age}</h1>
        </div>
      ))}
      <button
        onClick={() =>
          setEmployess(() =>
            employees.map((employee) =>
              employee.name == "abdullah" ? { ...employee, age: 29 } : employee
            )
          )
        }
        className="bg-blue-600 py-1 px-2 text-xs text-white rounded-full"
      >
        Update Data
      </button>
    </div>
  );
};

export default ArrayAddition;
