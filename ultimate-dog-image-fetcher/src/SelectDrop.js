import React from "react";

export const SelectDrop = ({ getPickedNumImages }) => {
  let output = [];
  let populateOptions = () => {
    for (let i = 0; i <= 10; i++) {
      output.push(
        <option value={i} key={i}>
          {i}
        </option>
      );
    }
  };
  populateOptions();

  return (
    <>
      <select className="SelectClassName" onChange={getPickedNumImages}>
        {output}
      </select>
    </>
  );
};
