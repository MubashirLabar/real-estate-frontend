import React from "react";
import Select from "react-select";

const Selector = ({
  name = "",
  className = "",
  value = {},
  options = [],
  placeholder = "Select",
  onChange = (e) => {},
  isClearable = false,
}) => {
  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#fff",
      border: "0",
      outline: "none",
      height: "36px",
      minHeight: "36px",
      borderRadius: "3px",

      ":hover": {
        borderColor: "transparent",
        boxShadow: "none",
      },
    }),
    input: (styles) => ({
      ...styles,
      outline: "none",
      fontWeight: "400",
      fontSize: "14px",
      color: "#000000",
    }),
    placeholder: (styles) => ({
      ...styles,
      fontWeight: "400",
      fontSize: "14px",
      color: "#9CA3AF",
    }),
    singleValue: (styles) => ({
      ...styles,
      fontSize: "14px",
      fontWeight: "400",
      color: "#000000",
    }),
  };

  // const value1 = { value: 'chocolate', label: 'Chocolate' }

  let sortedOptions = options.sort(function (a, b) {
    return a?.label?.localeCompare(b?.label);
  });

  return (
    <>
      <Select
        name={name}
        className={`selector ${className}`}
        placeholder={placeholder}
        options={[{ label: placeholder, value: "" }, ...sortedOptions]}
        styles={colorStyles}
        defaultValue={value}
        isClearable={isClearable}
        onChange={onChange}
      />
    </>
  );
};

export default Selector;
