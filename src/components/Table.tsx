import React from "react";
import User from "./User";
import data from "../database/data.json";

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
        {data.map((obj, i) => (
          <User {...obj} key={i} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
