import React, { useState } from "react";
import { CheckIcon } from "assets/icons";

function FilterButton({ data, selectedFilters, setSelectedFilters }) {
  const [isSelected, setIsSelected] = useState(
    data.value === "description" ? true : false
  );

  const handleCheckbox = () => {
    if (isSelected) {
      setIsSelected(false);
      const newFilters = selectedFilters.filter((x) => x.value !== data.value);
      setSelectedFilters(newFilters);
    } else {
      setIsSelected(true);
      setSelectedFilters([...selectedFilters, data]);
    }
  };

  return (
    <button
      className="flex items-center border border-[#CFCFCF] rounded-[4px] px-[12px] py-[10px] cursor-pointer"
      onClick={handleCheckbox}
    >
      <div
        className={`w-[15px] h-[15px] flex items-center justify-center 
        rounded-[4px] mr-[10px] cursor-pointer border border-[#4B4B4B] animation ${
          isSelected ? "bg-primary-700 border-primary-700" : ""
        }`}
      >
        {isSelected && (
          <div className="h-[11px] w-[11px] text-white-text">
            <CheckIcon />
          </div>
        )}
      </div>
      <div className="text-[#4A4A4A] text-[15px] leading-[18px]">
        {data.label}
      </div>
    </button>
  );
}

export default FilterButton;
