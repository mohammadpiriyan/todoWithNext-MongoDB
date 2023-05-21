import { BiCheck } from "react-icons/bi";

import React from "react";

const Bug = ({ message }) => {
  return (
    <div className="bug container mx-auto">
      <div className="flex justify-center mx-auto border border-red-200 bg-red-400 w-3/6 text-gray-900 text-base my-4 py-2 text-center bg-opacity-5">
        {message}
        <BiCheck size={25} color={"rgb(248,113,113)"}></BiCheck>
      </div>
    </div>
  );
};

export default Bug;
