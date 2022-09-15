import React, { useState } from "react";
import avatar from "../../images/pictureavatar.png";
import { requests } from "../data/Data";
import Alert from "./Alert";
import NotAvailable from "./NotAvailable";
import "./Table.css";

const Table = ({ user, pool }) => {
  const [alert, setAlert] = useState({});

  const sendRequest = () => {
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
          <thead className="text-black text-base">
            <tr>
              <th className="border-b font-light py-4 pr-8 pt-0 pb-3 text-left">
                User
              </th>
              <th className="border-b font-light py-4 pr-8 pt-0 pb-3 text-left">
                Weight
              </th>
              <th className="border-b font-light py-4 pr-8 pt-0 pb-3 text-left">
                Distance
              </th>
              <th className="border-b font-light py-4 pr-8 pt-0 pb-3 text-left">
                Action
              </th>
            </tr>
          </thead>
          {requests.map((item, i) => {
            return pool.length === 0 ? null : (
              <tbody
                key={i}
                className="bg-transparent text-acend-theme-dark font-semibold "
              >
                <tr>
                  <td className="border-b border-slate-100 py-4 pr-8 ">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12">
                        <img
                          className="p-2.5 rounded-full border-[3px] border-[#0F2F1D] w-12 h-12"
                          src={avatar}
                          alt=""
                        />
                      </div>
                      <h2 className="text-base">{item?.user}</h2>
                    </div>
                  </td>
                  <td className="border-b border-slate-100 py-4 pr-8">
                    {item?.Weight}
                  </td>
                  <td className="border-b border-slate-100 py-4 pr-8">
                    {item?.Distance}
                  </td>
                  <td className="border-b border-slate-100 py-4 pr-8">
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
      {pool.length === 0 ? <NotAvailable /> : null}
    </div>
  );
};

export default Table;
