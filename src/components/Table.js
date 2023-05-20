import React from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";

const Table = () => {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="px-16 py-2 bg-gray-800">
          <th>
            <span className="text-gray-200">Name</span>
          </th>
          <th>
            <span className="text-gray-200">Email</span>
          </th>
          <th>
            <span className="text-gray-200">salary</span>
          </th>
          <th>
            <span className="text-gray-200">Birthday</span>
          </th>
          <th>
            <span className="text-gray-200">Status</span>
          </th>
          <th>
            <span className="text-gray-200">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        <tr className="bg-gray-200 text-center">
          <td className="px-16 py-2 flex flex-row items-center">
            <img src="#" alt="" />
            <span className="text-center ml-2 font-semibold">
              Mohammad Piriyan
            </span>
          </td>
          <td className="px-16 py-2">
            <span>Mohammadpiriyan@gmail.com</span>
          </td>
          <td className="px-16 py-2">
            <span>$ 25000</span>
          </td>
          <td className="px-16 py-2">
            <span>03-05-1376</span>
          </td>
          <td className="px-16 py-2">
            <button className="cursor-pointer">
              <span className="bg-green-500 text-white px-5 py-1 rounded-full">
                Active
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
      </tbody>
    </table>
  );
};

export default Table;
