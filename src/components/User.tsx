import React from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";

const User = ({ id, name, avatar, email, salary, date, status }) => {
  return (
    <tr className="bg-gray-200 text-center">
      <td className="px-16 py-2 flex flex-row items-center">
        <img src={avatar || "#"} alt="" />
        <span className="text-center ml-2 font-semibold">
          {name || "Unknown"}
        </span>
      </td>
      <td className="px-16 py-2">
        <span>{email || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>$ {salary || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{date || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <button className="cursor-pointer">
          <span className="bg-green-500 text-white px-5 py-1 rounded-full">
            {status || "Unknown"}
          </span>
        </button>
      </td>
      <td className="px-16 py-2 flex justify-around gap-5">
        <button className="cursor-pointer">
          <BiEdit size={25} color={"rgb(34,197,97)"}></BiEdit>
        </button>
        <button className="cursor-pointer">
          <BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt>
        </button>
      </td>
    </tr>
  );
};

export default User;
