import React from "react";

const InputLog = ({ text, input, value }) => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="flex flex-col">
        <label className="ml-4 mb-2 text-md font-semibold text-softtext">
          {text}
        </label>
        <input
          type={text}
          className=" w-80 lg:w-[450px] pl-4 h-11 bg-[#c6dfe7] rounded-xl outline-none p-2"
          value={value}
          onChange={e => input(e.target.value)}
        />
      </div>
    </div>
  );
};

export const input = { InputLog };
