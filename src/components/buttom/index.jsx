import React from "react";

const ButtomSubmit = ({ text, onSubmit }) => {
  return (
    <div
      onClick={onSubmit}
      className="flex items-center justify-center w-56 h-12 bg-[#0099CC] rounded-xl cursor-pointer"
    >
      <span className="text-white text-lg font-medium font-bo">{text}</span>
    </div>
  );
};

export const buttom = { ButtomSubmit };
