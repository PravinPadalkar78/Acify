import React, { useState } from "react";
import { useLocation, useOutletContext } from "react-router";
import Input from "./Input";
import Select from "./Select";
import RadioInput from "./RadioInput";

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
        { pattern: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/, 
          msg: "Please Enter a Valid Mobile Number",
        },
      ],
      website: [
        { required: true, msg: "website cannot be empty" },
        {
          pattern:/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/,
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
        if(rule.pattern)
        {
          console.log(rule.pattern.test(value))
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
        <Input  title="Name:"  id="accountName" name="accountName" value={data.accountName} handleChange={handleChange} msg={error.accountName} placeholder="Enter The Account Holder Name"></Input>
        <Input  title="Email:"  id="email" name="email" value={data.email} handleChange={handleChange} msg={error.email} placeholder="Enter The Email"></Input>
        <Input  title="Phone No"  id="phoneNo" name="phoneNo" value={data.phoneNo} handleChange={handleChange} msg={error.phoneNo} placeholder="Enter The Account Holder phoneNo"></Input>
        <Input title="Website URL" id="website" name="website" value={data.website} handleChange={handleChange} msg={error.website} placeholder="Enter The Account Holder website"></Input>
        <Select title="Industry:" id="industry" name="industry" value={data.industry} handleChange={handleChange} defaultOption="Select the Industry" options={['technology','energy','construction','healthcare','retail','logistics','education']} msg={error.industry}/>
        <RadioInput title="Account Status:"  id="active" name="accountStatus"  handleChange={handleChange} msg={error.accountStatus} placeholder="Enter The Account Holder Name"/>
       
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
