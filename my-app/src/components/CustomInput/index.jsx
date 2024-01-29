import React from "react";
import "./styles.css";

function CustomInput({ name, type, onChange }) {
  const handleOnchange = (event) => {
    event.preventDefault();
    onChange(event.target.value);
  };

  return (
    <label className="custom-field">
      <input
        type={type}
        placeholder="&nbsp;"
        onChange={handleOnchange}
        name={name}
        pattern={type === "number" && "[0-9]{1,5}"}
      />
      <span className="placeholder">Digite {name}</span>
    </label>
  );
}

export default CustomInput;
