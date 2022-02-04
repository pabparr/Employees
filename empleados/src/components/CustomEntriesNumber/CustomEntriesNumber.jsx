import React from "react";

const getOptions = (minValue, maxValue) => {
  let options = [];
  for (var i = minValue; i <= maxValue; i = i + 5) {
    options.push(i);
  }
  return options;
};

const CustomEntriesNumber = ({ minValue, maxValue, onChangeHandler }) => {
  return (
    <div style={{ display: "inline", marginRight: "1em" }}>
      <span>Mostrar </span>
      <select onChange={(e) => onChangeHandler(parseInt(e.target.value))}>
        {getOptions(minValue, maxValue).map((value) => {
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        })}
      </select>{" "}
      registros
    </div>
  );
};

export default CustomEntriesNumber;
