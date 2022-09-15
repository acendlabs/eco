import React from "react";
import no_request from "../../images/no_request.svg";

const NotAvailable = () => {
  return (
    <div className="flex flex-col items-center py-24">
      <img src={no_request} alt="no request" />
      <p className="font-semibold text-lg py-8">
        There are no collectors available in the pool at the moment
      </p>
    </div>
  );
};

export default NotAvailable;
