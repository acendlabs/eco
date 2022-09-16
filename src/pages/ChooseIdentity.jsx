import React from "react";
// import Form from "../components/Forms/Form";

const ChooseIdentity = () => {
  const onChange = () => {};

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container py-16 sm:w-[60%] md:w-[70%]">
      <form
        onSubmit={onSubmit}
        className="flex flex-col space-y-8 text-lg font-medium text-[#0F2F1D]"
      >
        <div className="flex w-full space-x-4 sm:space-x-8">
          <div className="flex flex-col w-full space-y-3">
            <label
              className={alert.type === "danger" ? "text-red-400" : null}
              htmlFor="username"
            >
              {alert.type === "danger" ? alert.msg : "Username"}
            </label>
            <input
              // value={user.username}
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
          <div className="flex flex-col w-full space-y-3">
            <label
              className={alert.type === "danger" ? "text-red-400" : null}
              htmlFor="username"
            >
              {alert.type === "danger" ? alert.msg : "Username"}
            </label>
            <input
              // value={user.username}
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
        </div>

        <div>
          <input type="radio" />
        </div>

        <button
          type="submit"
          className="w-32 bg-[#0F2F1D] text-white py-4 px-6 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ChooseIdentity;
