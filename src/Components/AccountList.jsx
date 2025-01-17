import React from "react";
import { useOutletContext } from "react-router";

export default function AccountList() {
  const [dataList,setDataList,data, setData] = useOutletContext();
  console.log(dataList);
  return (
    <section className="mx-4 pt-6">
      <p className='my- pb-1 text-2xl'>AccountLists</p>
      <p className="opacity-80">Here's the List of your Accounts</p>
      <div className="shadow-md mt-4 overflow-auto">
      <table className="content-table mx-2 mb-8">
        <thead >
          <tr >
            <th>
              <div className="table-head-cell">
                <span>AccountName</span>
                <i className="fa-ellipsis-v fas"></i>
              </div>
            </th>
            <th>
              <div className="table-head-cell">
                <span>Email</span>
                <i className="fa-ellipsis-v fas"></i>
              </div>
            </th>
            <th>
              <div className="table-head-cell">
                <span>Phone No.</span>
                <i className="fa-ellipsis-v fas"></i>
              </div>
            </th>
            <th>
              <div className="table-head-cell">
                <span>Website</span>
                <i className="fa-ellipsis-v fas"></i>
              </div>
            </th>
            <th>
              <div className="table-head-cell">
                <span>Industry</span>
                <i className="fa-ellipsis-v fas"></i>
              </div>
            </th>
            <th>
              <div className="table-head-cell">
                <span>Account_Status</span>
                <i className="fa-ellipsis-v fas"></i>
              </div>
            </th>
            <th>
              <div className="table-head-cell">
                <span>Remark</span>
                <i className="fa-ellipsis-v fas"></i>
              </div>
            </th>
            <th>
              <div className="table-head-cell">
                <span>Action</span>
                <i className="fa-ellipsis-v fas"></i>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {dataList.map(
            ({
              accountName,
              email,
              phoneNo,
              website,
              industry,
              accountStatus,
              remark,
            }) => {
              return (
                <tr key={email}>
                  <td className="whitespace-nowrap">{accountName}</td>
                  <td className="whitespace-nowrap">{email}</td>
                  <td className="whitespace-nowrap">{phoneNo}</td>
                  <td className="whitespace-nowrap">{website}</td>
                  <td className="whitespace-nowrap">{industry}</td>
                  <td className="whitespace-nowrap">{accountStatus}</td>
                  <td className="whitespace-nowrap">{remark}</td>
                  <td >
                    <i
                      className="mx-2 text-violet-800 hover:text-violet-900 cursor-pointer fa-edit fas"
                      onClick={(e) => handleUpdate(e, id, feedback)}
                    ></i>
                    <i
                      className="mx-2 text-violet-800 hover:text-violet-900 cursor-pointer fa fa-trash"
                      onClick={(e) => handleDelete(e, id)}
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
