import React from 'react'

export default function Input({title,id,name,value,handleChange,msg,placeholder}) {
  return (
    <div className="px-4 py-1 pt-4">
          <label className="block mb-1 text-md" htmlFor="accountName">
            {title}
          </label>
          <input
            type="text"
            id={id}
            name={name}
            value={value}
            onChange={handleChange}
            className="px-2 w-full h-7 outline-none"
            placeholder={placeholder}
          ></input>
          <p className="mb-2 px-1 text-red-700 text-sm font">
            {msg}
          </p>
        </div>
  )
}
