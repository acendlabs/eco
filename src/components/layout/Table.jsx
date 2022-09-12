import React, { useState } from "react";
import avatar from "../../images/pictureavatar.png";
import { requests } from "../data/Data";
import Alert from "./Alert";

const Table = ({ user }) => {
  const [alert, setAlert] = useState({});

  const sendRequest = () => {
    console.log("sent");
    setAlert({ type: "success", msg: "Request Sent!" });
    setTimeout(() => {
      setAlert({});
    }, 1500);
  };

  return (
    <div className="p-8 md:p-16 rounded-xl bg-[#EFF6F2] w-max sm:w-full ">
      <Alert alert={alert} />
      <div>
        <table className="w-full border-collapse table-auto sm:table-fixed text-sm font-normal">
          <thead>
            <tr>
              <th className="border-b font-medium py-4 pr-8 pt-0 pb-3 text-slate-400 text-left">
                User
              </th>
              <th className="border-b font-medium py-4 pr-8 pt-0 pb-3 text-slate-400 text-left">
                Weight
              </th>
              <th className="border-b font-medium py-4 pr-8 pt-0 pb-3 text-slate-400 text-left">
                Distance
              </th>
              <th className="border-b font-medium py-4 pr-8 pt-0 pb-3 text-slate-400 text-left">
                Action
              </th>
            </tr>
          </thead>
          {requests.map((item, i) => {
            return (
              <tbody key={i} className="bg-transparent">
                <tr>
                  <td className="border-b border-slate-100 py-4 pr-8 text-slate-500">
                    <div className="w-12 h-12">
                      <img
                        className="p-2.5 rounded-full border-[3px] border-[#0F2F1D] w-12 h-12"
                        src={avatar}
                        alt=""
                      />
                    </div>
                  </td>
                  <td className="border-b border-slate-100 py-4 pr-8 text-slate-500">
                    {item?.Weight}
                  </td>
                  <td className="border-b border-slate-100 py-4 pr-8 text-slate-500">
                    {item?.Distance}
                  </td>
                  <td className="border-b border-slate-100 py-4 pr-8 text-slate-500">
                    <button
                      className="bg-[#0F2F1D] text-white py-4 px-5 rounded-lg"
                      onClick={sendRequest}
                    >
                      Request
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      {!user.username ? null : ""}
    </div>
  );
};

export default Table;
