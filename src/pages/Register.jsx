import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../components/layout/Avatar";
import Title from "../components/layout/Title";
import logolight from "../images/logolight.png";
import "./Register.css";

// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

const ChooseIdentity = () => {
  const [file, setFile] = useState({ data: null });
  // eslint-disable-next-line
  const [filename, setFilename] = useState("Choose Image");
  const [user, setUser] = useState({
    username: "",
    phone: "+234",
    role: "",
    company_name: "",
    website: "",
    address: "",
  });

  //distructuring user details
  const { username, phone, role, company_name, website, address } = user;

  const [alert, setAlert] = useState({});

  // console.log(alert, user.username, file);
  const onFileChange = (e) => {
    setFile({ data: URL.createObjectURL(e.target.files[0]) });
    setFilename(e.target.files[0].name);
  };

  const remove = () => {
    setFile({ data: null });
  };

  const onChange = (e) => {
    if (e.target.name === "phone") {
      const formattedPhone = formatPhone(e.target.value);
      setUser({ ...user, phone: formattedPhone });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const formatPhone = (value) => {
    if (!value) return value;
    const phoneN = value.replace(/[^\d]/g, "");
    const phoneNlen = phoneN.length;
    console.log(phoneNlen);
    if (phoneNlen < 4) return phoneN;
    if (phoneNlen < 16) {
      return `(+${phoneN.slice(0, 3)}) ${phoneN.slice(3, 14)}`;
    }
    // return `(${phoneN.slice(0, 3)}) ${phoneN.slice(3, 6)}-${phoneN.slice(
    //   6,
    //   11
    // )}`;
  };

  console.log("user", user);

  const redirect = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      username === "" ||
      phone === "" ||
      role === "" ||
      company_name === "" ||
      website === "" ||
      address === ""
    ) {
      setAlert({ type: "danger", msg: "Enter all fields" });
      setTimeout(() => {
        setAlert({});
      }, 1000);
    } else {
      setUser({});
      redirect("/dashboard");
    }
  };

  return (
    <div className="relative flex flex-col container py-8">
      {/* <Alert alert={alert} /> */}
      <img
        className="w-[40%] h-auto absolute -z-10 left-[50%] -translate-x-2/4 opacity-25"
        src={logolight}
        alt=""
      />
      <Title title="Register" />
      <div className="flex flex-col mx-auto w-full sm:w-[90%]  xl:w-[60%] md:flex-row py-16 items-start space-y-8 md:space-y-0 md:space-x-14">
        <Avatar file={file} onFileChange={onFileChange} remove={remove} />

        <form
          onSubmit={onSubmit}
          className="space-y-4 sm:space-y-8 w-full sm:w-[70%]"
        >
          <div className="space-y-4 w-full sm:w-96">
            <label
              className={`${
                alert.type === "danger" ? "text-red-400" : null
              } font-medium text-base`}
              htmlFor="username"
            >
              {alert.type === "danger" ? alert.msg : "Username*"}
            </label>
            <input
              value={username?.trim()}
              className={`border-[#0F2F1D]
           w-full rounded-lg font-normal border-[3px]  bg-transparent py-3.5 px-8 text-base outline-none`}
              type="text"
              name="username"
              placeholder="Enter a display name"
              onChange={onChange}
              required
            />
          </div>
          <div className="space-y-4 w-full sm:w-96">
            <label
              className={`${
                alert.type === "danger" ? "text-red-400" : null
              } font-medium text-base`}
              htmlFor="phone"
            >
              {alert.type === "danger" ? alert.msg : "Phone number*"}
            </label>
            <input
              value={phone}
              className={`border-[#0F2F1D]
           w-full rounded-lg font-normal border-[3px]  bg-transparent py-3.5 px-8 text-base outline-none`}
              type="phone"
              name="phone"
              placeholder="Enter a phone number"
              onChange={onChange}
              required
            />
          </div>
          <h2 className="text-sm sm:text-base font-medium">Pick Role*</h2>
          <div class="flex items-center mb-4">
            <input
              required
              onChange={onChange}
              type="radio"
              value="disposer"
              name="role"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
            />
            <label
              htmlFor="role"
              class="ml-2 text-sm font-medium text-acend-theme-dark dark:text-gray-300"
            >
              Disposer
            </label>
          </div>
          <div class="flex items-center">
            <input
              onChange={onChange}
              type="radio"
              value="collector"
              name="role"
              class="w-4 h-4 text-acend-theme-dark bg-gray-100 border-gray-300 "
            />
            <label
              htmlFor="role"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Collectors
            </label>
          </div>
          <div class="flex items-center">
            <input
              onChange={onChange}
              type="radio"
              value="recycler"
              name="role"
              class="w-4 h-4 bg-gray-100 border-gray-300 "
            />
            <label
              htmlFor="role"
              class="ml-2 text-sm font-medium text-acend-theme-dark "
            >
              Recycler
            </label>
          </div>
          <div className="space-y-4 w-full sm:w-96">
            <label
              className={`${
                alert.type === "danger" ? "text-red-400" : null
              } font-medium text-base`}
              htmlFor="company_name"
            >
              {alert.type === "danger" ? alert.msg : "Company name*"}
            </label>
            <input
              value={company_name}
              className={`border-[#0F2F1D]
           w-full rounded-lg font-normal border-[3px]  bg-transparent py-3.5 px-8 text-base outline-none`}
              type="text"
              name="company_name"
              placeholder="Company name"
              onChange={onChange}
              required
            />
          </div>
          <div className="space-y-4 w-full sm:w-96">
            <label
              className={`${
                alert.type === "danger" ? "text-red-400" : null
              } font-medium text-base`}
              htmlFor="website"
            >
              {alert.type === "danger" ? alert.msg : "Website"}
            </label>
            <input
              value={website?.trim()}
              className={`border-[#0F2F1D]
           w-full rounded-lg font-normal border-[3px]  bg-transparent py-3.5 px-8 text-base outline-none`}
              type="text"
              name="website"
              placeholder="Company website"
              onChange={onChange}
              required
            />
          </div>
          <div className="space-y-4 w-full sm:w-96">
            <label
              className={`${
                alert.type === "danger" ? "text-red-400" : null
              } font-medium text-base`}
              htmlFor="address"
            >
              {alert.type === "danger" ? alert.msg : "Address*"}
            </label>
            <input
              value={address}
              className={`border-[#0F2F1D]
           w-full rounded-lg font-normal border-[3px]  bg-transparent py-3.5 px-8 text-base outline-none`}
              type="text"
              name="address"
              placeholder="Address"
              onChange={onChange}
              required
            />
          </div>
          <button
            type="submit"
            className="opacity-95 transition ease-in hover:opacity-100 w-32 bg-[#0F2F1D] text-white py-4 px-6 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChooseIdentity;
