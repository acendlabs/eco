import React from "react";

const Form = ({ onSubmit, alert, onChange, user }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="w-full md:w-7/12 lg:w-[70%] space-y-8 text-lg font-medium text-[#0F2F1D] "
    >
      <div className=" md:w-[32vw] lg:w-[34vw] space-y-3 ">
        <label
          className={alert.type === "danger" ? "text-red-400" : null}
          htmlFor="username"
        >
          {alert.type === "danger" ? alert.msg : "Username"}
        </label>
        <input
          value={user.username}
          className={`${
            alert.type === "danger"
              ? `border-red-400`
              : alert.type === "success"
              ? `border-green-400`
              : `border-[#0F2F1D]`
          } w-full rounded-lg font-normal border-[3px]  bg-transparent py-3.5 px-8 text-base outline-none`}
          type="text"
          name="username"
          placeholder="Enter a display name"
          onChange={onChange}
        />
      </div>
      <button
        type="submit"
        className="bg-[#0F2F1D] text-white py-4 px-6 rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
