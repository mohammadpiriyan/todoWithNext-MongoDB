import React, { useReducer } from "react";
import { BiPlus } from "react-icons/bi";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const Form = () => {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="grid lg:grid-cols-2 w-4/6 gap-4"
      >
        <div className="input-type">
          <input
            type="text"
            onChange={setFormData}
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
            name="firstname"
            placeholder="FirstName"
            id=""
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            onChange={setFormData}
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
            name="lastname"
            placeholder="LastName"
            id=""
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            onChange={setFormData}
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
            name="email"
            placeholder="Email"
            id=""
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            onChange={setFormData}
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
            name="salary"
            placeholder="SalaryName"
            id=""
          />
        </div>
        <div className="input-type">
          <input
            type="date"
            onChange={setFormData}
            className="border px-5 py-3 focus:outline-none rounded-md"
            name="date"
            placeholder="SalaryName"
            id=""
          />
        </div>

        <div className="flex gap-10 items-center">
          <div className="form-check">
            <input
              type="radio"
              onChange={setFormData}
              name="status"
              id="radioDefault1"
              value="Active"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label
              className="inline-block text-gray-800"
              htmlFor="radioDefault1"
            >
              Active
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              onChange={setFormData}
              name="status"
              id="radioDefault2"
              value="Inactive"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-rose-500 checked:border-rose-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label
              className="inline-block text-gray-800"
              htmlFor="radioDefault2"
            >
              Inactive
            </label>
          </div>
        </div>
        <button className="flex justify-center text-base w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-800">
          Add
          <span>
            <BiPlus className="px-1" size={24}></BiPlus>
          </span>
        </button>
      </form>
    </div>
  );
};

export default Form;
