import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import { Outlet } from "react-router";
import dummyData from "../Data";

function App() {
  const [dataList, setDataList] = useState(dummyData);
  const [data,setData] = useState({
    accountName:"",
    email: "",
    phoneNo:"",
    website :"",
    industry:"",
    accountStatus:"",
    remark:""
  })
  return (
    <div className="mx-auto max-w-[1400px]">
      <Header />
      <Outlet context={[dataList, setDataList,data,setData]} />
    </div>
  );
}

export default App;
