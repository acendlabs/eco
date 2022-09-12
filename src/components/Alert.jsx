import React from "react";

const Alert = ({ alert }) => {
  //   console.log(alert);
  if (!alert.msg) {
    return null;
  } else {
    return (
      <div
        className={`${
          alert.type === "danger" ? `bg-red-400` : `bg-green-400`
        } py-4 px-8 b rounded-md absolute z-10 w-[30%vw] left-[10%] right-[10%] top-8`}
      >
        <div className="text-white flex justify-between items-center">
          <h1 className=""> {alert.msg}</h1>
          {/* <div className="text-xl">x</div> */}
        </div>
      </div>
    );
  }
};

export default Alert;
