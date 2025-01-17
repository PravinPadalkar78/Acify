import React, { useState } from "react";
import { useLocation, useOutletContext } from "react-router";

export default function EntryForm() {
  const [dataList, setDataList, data, setData] = useOutletContext();
  const [error, setError] = useState({});
  const updating = useLocation()

  if(updating.state)
  {
    setData(updating.state)
  }
  const validate = (formData) => {
    let errorData = {};
    const validationConfig = {
      accountName: [
        { required: true, msg: "Name Cannot be empty" },
        { length: 5, msg: "Length should be greater than 5" },
      ],
      email: [
        { required: true, msg: "Email cannot be empty" },
        {
          pattern: /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/,
          msg: "Please Enter a Valid email",
        },
      ],
      phoneNo: [
        { required: true, msg: "Phone Number cannot be empty" },
        { length: 10, msg: "Please Enter a Valid Mobile Number" },
      ],
      website: [
        { required: true, msg: "website cannot be empty" },
        {
          pattern: /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/,
          msg: "Please Enter a Valid email",
        },
      ],
      industry: [{ required: true, msg: "Select a industry" }],
      accountStatus: [{ required: true, msg: "Select the Status" }],
      remark: [{ required: true, msg: "Remark cannot be Empty" }],
    };

    Object.entries(formData).map(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorData[key] = rule.msg;
          return true;
        }
        if (rule.length && value.length < rule.length) {
          errorData[key] = rule.msg;
          return true;
        }
      });
    });
    setError(errorData);
    return errorData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultData = validate(data);
    if (Object.entries(resultData).length) {
      return;
    }
    setDataList((prevState) => [...prevState, data]);
    setData({
      accountName: "",
      email: "",
      phoneNo: "",
      website: "",
      industry: "",
      accountStatus: "",
      remark: "",
    });
    alert("Data Added Succefullly");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <main className="mx-4">
      <p className="my-4 border-l font-semibold text-2xl">User Details</p>
      <form className="bg-slate-200 shadow-md mb-4 rounded">
        <div className="px-4 py-1 pt-4">
          <label className="block mb-1 text-md" htmlFor="accountName">
            Account Name:
          </label>
          <input
            type="text"
            id="accountName"
            name="accountName"
            value={data.accountName}
            onChange={(e) => handleChange(e)}
            className="px-2 w-full h-7 outline-none"
            placeholder="Enter The Account Holder Name"
          ></input>
          <p className="mb-2 px-1 text-red-700 text-sm font">
            {error.accountName}
          </p>
        </div>
        <div className="mt-1 px-4 py-2">
          <label className="block mb-1 text-md" htmlFor="accountName">
            Email:
          </label>
          <input
            id="email"
            className="px-2 w-full h-7 outline-none"
            type="email"
            placeholder="Enter The Account Holder Email"
            name="email"
            value={data.email}
            onChange={(e) => handleChange(e)}
          ></input>
          <p className="mb-2 px-1 text-red-700 text-sm font">{error.email}</p>
        </div>
        <div className="px-4 py-2">
          <label className="block mb-1 text-md" htmlFor="phoneNo">
            Phone No:
          </label>
          <input
            type="tel"
            id="phoneNo"
            className="px-2 w-full h-7 outline-none"
            placeholder="Enter The Account Holder Phone No"
            name="phoneNo"
            value={data.phoneNo}
            onChange={(e) => handleChange(e)}
          ></input>
          <p className="mb-2 px-1 text-red-700 text-sm font">{error.phoneNo}</p>
        </div>
        <div className="px-4 py-2">
          <label className="block mb-1 text-md" htmlFor="website">
            Website URL:
          </label>
          <input
            type="url"
            id="website"
            className="px-2 w-full h-7 outline-none"
            placeholder="Enter The website URL"
            name="website"
            value={data.website}
            onChange={(e) => handleChange(e)}
          ></input>
          <p className="mb-2 px-1 text-red-700 text-sm font">{error.website}</p>
        </div>
        <div className="px-4 py-2">
          <label className="block mb-1 text-md" htmlFor="accountName">
            Industry:
          </label>
          {/* <input type='text' id='accountName' className='px-2 w-full h-7 outline-none' placeholder='Enter The Account Holder Name'></input> */}
          <select
            className="px-1 w-full h-7 outline-none"
            name="industry"
            value={data.industry}
            onChange={(e) => handleChange(e)}
          >
            <option hidden value="">
              Select the Industry
            </option>
            <option value="technology">Technology</option>
            <option value="energy">Energy</option>
            <option value="construction">Construction</option>
            <option value="healthcare">Healthcare</option>
            <option value="retail">Retail</option>
            <option value="logistics">Logistics</option>
            <option value="education">Education</option>
          </select>
          <p className="mb-2 px-1 text-red-700 text-sm font">
            {error.industry}
          </p>
        </div>
        <div className="px-4 py-2">
          <label className="block mb-1 text-md" htmlFor="accountName">
            Account Status:
          </label>
          <div className="inline-block p-1">
            <input
              type="radio"
              id="active"
              className="px-2 w-4 h-4 outline-none"
              name="accountStatus"
              value="active"
              onChange={(e) => handleChange(e)}
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
              name="accountStatus"
              value="inactive"
              onChange={(e) => handleChange(e)}
            ></input>
            <label htmlFor="inactive" className="align-top mx-1">
              InActive
            </label>
          </div>
          <p className="mb-2 px-1 text-red-700 text-sm font">
            {error.accountStatus}
          </p>
        </div>
        <div className="px-4 py-2">
          <label className="block mb-1 text-md" htmlFor="remark">
            Remark:
          </label>
          <textarea
            id="remark"
            className="px-2 w-full h-12 outline-none"
            placeholder="Enter The Remark"
            name="remark"
            value={data.remark}
            onChange={(e) => handleChange(e)}
          ></textarea>
          <p className="mb-2 px-1 text-red-700 text-sm font">{error.remark}</p>
        </div>
        <div className="px-4 py-2">
          <button
            className="bg-lime-400 my-4 rounded w-full h-8 text-base"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
