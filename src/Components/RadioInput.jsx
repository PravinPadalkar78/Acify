import React from "react";

export default function RadioInput({title,name,handleChange,msg,placeholder}) {
  return (
    <div className="px-4 py-2">
      <label className="block mb-1 text-md" htmlFor="accountName">
       {title}
      </label>
      <div className="inline-block p-1">
        <input
          type="radio"
          id="active"
          className="px-2 w-4 h-4 outline-none"
          name={name}
          value="active"
          onChange={handleChange}
        ></input>
        <label htmlFor="active" className="align-top mx-1">
          Active
        </label>
      </div>
      <div className="inline-block p-1">
        <input
          type="radio"
          id="inactive"
          className="px-2 w-4 h-4 outline-none"
          name={name}
          value="inactive"
          onChange={handleChange}
        ></input>
        <label htmlFor="inactive" className="align-top mx-1">
          InActive
        </label>
      </div>
      <p className="mb-2 px-1 text-red-700 text-sm font">
        {msg}
      </p>
    </div>
  );
}
