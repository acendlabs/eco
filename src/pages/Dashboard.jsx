import React, { useState } from "react";
import "./Dashboard.css";
import logolight from "../images/logolight.png";
import Alert from "../components/layout/Alert";
import Table from "../components/layout/Table";
import Notifications from "../components/layout/Notifications";
import Avatar from "../components/layout/Avatar";
import Form from "../components/Forms/Form";
import Pagination from "../components/layout/Pagination";
import Title from "../components/layout/Title";

const Dashboard = () => {
  const [file, setFile] = useState({ data: null });
  // eslint-disable-next-line
  const [pool, setPool] = useState([]);
  // eslint-disable-next-line
  const [filename, setFilename] = useState("Choose Image");
  const [user, setUser] = useState({ username: "" });
  const [alert, setAlert] = useState({});
  // console.log(filename);

  // console.log(alert, user.username, file);
  const onFileChange = (e) => {
    setFile({ data: URL.createObjectURL(e.target.files[0]) });
    setFilename(e.target.files[0].name);
  };

  const onChange = (e) => {
    setUser({ [e.target.name]: e.target.value });
  };

  const remove = () => {
    setFile({ data: null });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (user.username === "" || user.username === null) {
      setAlert({ type: "danger", msg: "Enter all fields" });
      setTimeout(() => {
        setAlert({});
      }, 1000);
    } else {
      setAlert({ type: "success", msg: "Success" });
      setUser({ username: "" });
      setTimeout(() => {
        setAlert({});
      }, 1500);
    }
  };

  return (
    <div className="relative flex flex-col container py-8">
      <Alert alert={alert} />
      <img
        className="w-[40%] h-auto absolute -z-10 left-[50%] -translate-x-2/4 opacity-25"
        src={logolight}
        alt=""
      />
      <Title title="Dashboard" />
      <div className="flex flex-col justify-center md:flex-row md:justify-between h-[550px] md:h-[400px] items-center space-y-8 md:space-y-0 md:space-x-14">
        <Avatar file={file} onFileChange={onFileChange} remove={remove} />
        <Form
          onSubmit={onSubmit}
          alert={alert}
          onChange={onChange}
          user={user}
        />
      </div>

      <div className="flex flex-col xl:flex-row xl:space-x-8 mb-16 text-left">
        <div className="relative w-full xl:w-[60%] ">
          <h2 className="text-2xl font-bold mt-8 mb-8 md:mb-16 ">Activities</h2>
          <div className="w-full overflow-x-scroll sm:overflow-hidden">
            <Table user={user} pool={pool} />
          </div>
          <Pagination />
        </div>
        <div className="w-full xl:w-[40%]">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
