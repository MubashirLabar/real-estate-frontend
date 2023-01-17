import { CheckIcon } from "assets/icons";
import React, { useState } from "react";

function ChooseOptions({ data, name, fieldValue, setFieldValue }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleCheckbox = () => {
    if (isSelected) {
      setIsSelected(false);
      const newFilters = fieldValue.filter((x) => x.value !== data.value);
      setFieldValue(`${name}`, newFilters);
    } else {
      setIsSelected(true);
      setFieldValue(`${name}`, [...fieldValue, data]);
    }
  };

  return (
    <label
      className="flex items-center cursor-pointer mb-[14px]"
      onClick={handleCheckbox}
    >
      <div
        className={`w-[15px] h-[15px] flex items-center justify-center 
        rounded-[4px] mr-[10px] cursor-pointer animation
        ${isSelected ? "bg-primary-700" : "bg-white-text"}`}
      >
        <div className="h-[10px] w-[10px] text-white-text">
          <CheckIcon />
        </div>
      </div>
      <div className="text-white-text text-[16px] leading-[18px]">
        {data.label}
      </div>
    </label>
  );
}

export default ChooseOptions;
