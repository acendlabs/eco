import React from "react";
import avatar from "../images/pictureavatar.png";
import { requests } from "./data/Data";

const Table = ({ user }) => {
  return (
    <div className="p-8 md:p-16 rounded-xl bg-[#EFF6F2] w-max">
      <div>
        <table className="border-collapse table-auto text-sm font-normal">
          <thead className="">
            <tr>
              <th className="border-b dark:border-slate-600 font-medium p-4 md:pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                User
              </th>
              <th className="border-b dark:border-slate-600 font-medium p-4 md:pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                Weight
              </th>
              <th className="border-b dark:border-slate-600 font-medium p-4 md:pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                Distance
              </th>
              <th className="border-b dark:border-slate-600 font-medium p-4 md:pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                Action
              </th>
            </tr>
          </thead>
          {requests.map((item, i) => {
            return (
              <tbody className="bg-transparent">
                <tr>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 md:pl-8 text-slate-500 dark:text-slate-400">
                    <img
                      className="p-2.5 rounded-full border-[3px] border-[#0F2F1D] w-12 h-12"
                      src={avatar}
                      alt=""
                    />
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 md:pl-8 text-slate-500 dark:text-slate-400">
                    {item?.Weight}
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 md:pl-8 text-slate-500 dark:text-slate-400">
                    {item?.Distance}
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 md:pl-8 text-slate-500 dark:text-slate-400">
                    <button className="bg-[#0F2F1D] text-white py-4 px-6 rounded-lg">
                      Request
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>

      {!user.username ? <div>no</div> : ""}
    </div>
  );
};

export default Table;
