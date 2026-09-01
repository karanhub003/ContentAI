import React from "react";

export default function SelectOption({ label, options = [], value, onChange }) {
   
  return (
    <div className="selectOptionContainer flex flex-col gap-2">
      <label className="text-[16px]">{label}</label>

      <select value={value} onChange={onChange} className="bg-[#0D131D] border border-[#1E293B] rounded-lg px-3 py-2 text-[14px]">
        {options.map((option) => (
          <option key={option} option={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
