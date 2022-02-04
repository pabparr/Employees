import React from "react";

const CustomSearch = ({ text, onChangeHandler }) => {
  return (
    <div className="d-flex justify-content-end">
      <input
        type="text"
        defaultValue={text}
        placeholder="Buscar por nombre"
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  );
};

export default CustomSearch;
