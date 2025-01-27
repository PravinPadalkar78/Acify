import React from "react";
import { Link, useOutletContext } from "react-router";
import { CSVLink, CSVDownload } from "react-csv";

export default function AccountList() {
  const [dataList, setDataList, data, setData] = useOutletContext();
  const handleDelete = (e, email) => {
    setDataList((prevState) =>
      prevState.filter((ele) => {
        if (ele.email === email) {
          return false;
        } else return true;
      })
    );
  };
  return (
    <section className="mx-2 md:mx-4 pt-6">
      <p className=" pb-1 font-semibold text-2xl">AccountLists</p>
      <div className="flex justify-between">
        <p className="opacity-80">Here's the List of your Accounts</p>
        <CSVLink
          className="xl:mr-12 bg-green-500 px-2 py-1 rounded-md"
          data={dataList}
        >
          <span className="hidden sm:inline">Download </span>
          <i className="fa fa-download" aria-hidden="true"></i>
        </CSVLink>
      </div>
      <div className="shadow-md mt-4 overflow-auto">
        <table className="content-table mx-2 mb-8">
          <thead>
            <tr>
              {Object.keys(dataList[0]).map((head,i) => {
                return (
                  <th key={i}>
                    <div className="table-head-cell capitalize">
                      <span>{head}</span>
                      <i className="fa-ellipsis-v fas cursor-pointer"></i>
                    </div>
                  </th>
                );
              })}
              <th>
                <div className="table-head-cell">
                  <span>Action</span>
                  <i className="fa-ellipsis-v fas cursor-pointer"></i>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {dataList.map(
              ({accountName,email,phoneNo,website,industry,accountStatus,remark,}) => {
                return (
                  <tr key={email}>
                    <td className="whitespace-nowrap">{accountName}</td>
                    <td className="whitespace-nowrap">{email}</td>
                    <td className="whitespace-nowrap">{phoneNo}</td>
                    <td className="whitespace-nowrap">{website}</td>
                    <td className="whitespace-nowrap">{industry}</td>
                    <td className="whitespace-nowrap text-center">
                      <p
                        className={` w-24 mx-auto py-1 text-gray-800 rounded-md cursor-pointer ${accountStatus == "Active" ? "bg-lime-300" : "bg-red-300"} `}
                      >
                        {accountStatus}
                      </p>
                    </td>
                    <td className="whitespace-nowrap">{remark}</td>
                    <td>
                      <Link
                        to="entryform"
                        state={{
                          accountName,
                          email,
                          phoneNo,
                          website,
                          industry,
                          accountStatus,
                          remark,
                        }}
                      >
                        <i className="mx-2 text-violet-800 hover:text-violet-900 cursor-pointer fa-edit fas"></i>
                      </Link>
                      <i
                        className="mx-2 text-violet-800 hover:text-violet-900 cursor-pointer fa fa-trash"
                        onClick={(e) => handleDelete(e, email)}
                        aria-hidden="true"
                      ></i>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
