import React from 'react'

export default function Select({title,id,name,value,handleChange,msg,placeholder,defaultOption,options}) {
  return (
    <div className="px-4 py-2">
    <label className="block mb-1 text-md" htmlFor={id}>{title}</label>
    <select
      className="px-1 w-full h-7 outline-none"
      id={id}
      name={name}
      value={value}
      onChange={handleChange}
    >
      <option hidden value="">
        {defaultOption}
      </option>
      {options.map((option)=>{
        return <option className='capitalize' key={option} value={option}>{option}</option>
      })}
    </select>
    <p className="mb-2 px-1 text-red-700 text-sm font">
      {msg}
    </p>
  </div>
  )
}
