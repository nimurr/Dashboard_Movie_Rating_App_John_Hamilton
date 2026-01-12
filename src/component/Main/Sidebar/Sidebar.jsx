/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosLogOut, IoIosWarning } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "/Images/Auth/admin-logo.png";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/features/auth/authSlice";
import { MdDashboard } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { FaCrown, FaUsers } from "react-icons/fa6";
import { TbMovie } from "react-icons/tb";

const sidebarItems = [
  {
    path: "/",
    name: "Dashboard",
    icon: <MdDashboard className="size-6" />,
  },
  {
    path: "/users",
    name: "Users",
    icon: <FaUsers className="size-6" />,
  },
  {
    path: "/movie-and-series",
    name: "Movie and Series",
    icon: <TbMovie className="size-6" />,
  },
  {
    path: "/subscription",
    name: "Subscription",
    icon: <FaCrown className="size-6" />,
  },
  {
    path: "/report-and-issue",
    name: "Report & Issue",
    icon: <IoIosWarning className="size-6" />,
  },
  //? Start here


  {
    path: "/settings",
    name: "Settings",
    icon: <IoSettingsSharp className="size-6" />,
  },
];

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/auth");
  };

  return (
    <div className="!bg-[#1a3c58]">
      {/* Desktop Sidebar */}
      <div className="hidden overflow-y-auto md:block w-full md:w-[200px] lg:w-[250px] xl:w-[280px] h-full !bg-[#1a3c58] fixed ">
        <Link to={"/"} className="flex flex-col justify-center items-center gap-2">
          <img src={logo} alt="logo" className="w-32 mt-10 mb-20" />
        </Link>
        <ul className="flex flex-col bg-[#1a3c58] gap-5">
          {sidebarItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `w-[80%] mx-auto px-5 py-2 border border-[#1a3c58] hover:border-orange-500 flex justify-start items-center gap-3 rounded text-white ${isActive ? "bg-[#152e44] !border-orange-500 !text-white " : ""
                }`
              }
            >
              {item?.icon}
              <h>{item.name}</h>
            </NavLink>
          ))}
        </ul>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-1 font-bold px-10 py-4  text-black  ml-6 mt-5"
        >
          <IoIosLogOut className="size-8  p-1 text-orange-500 rounded-md" />
          <span className="text-orange-500">Logout</span>
        </button>

      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 overflow-y-auto left-0 z-40 w-64 h-full bg-[#1c3f5e]  transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div onClick={toggleSidebar} className="absolute top-0 right-0 p-4">
          <RxCross1 className="size-6 text-white" />
        </div>
        <div className="flex flex-col justify-center items-center gap-2 ">
          <img src={logo} alt="logo" className="w-28 shadow rounded my-10 " />
        </div>
        <ul className="flex flex-col gap-3 mt-10">
          {sidebarItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={toggleSidebar}
              className={({ isActive }) =>
                `w-[70%] mx-auto px-5 py-2 flex items-center gap-3 text-white ${isActive ? "bg-[#152e44] !text-white " : ""
                }`
              }
            >
              {item?.icon}
              <h>{item.name}</h>
            </NavLink>
          ))}
        </ul>

        <button
          onClick={() => {
            setShowModal(true);
            toggleSidebar();
          }}
          className="flex items-center gap-2 px-10 ml-5 mt-5"
        >
          <IoIosLogOut className="size-8   p-1 text-orange-500 rounded-md" />
          <span className="text-orange-500">Logout</span>
        </button>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-[#17334b83] bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#214b70] p-6 rounded shadow-lg w-80">
            <h3 className="text-lg font-bold mb-4">Confirm Logout</h3>
            <p className="mb-6">Are you sure you want to log out?</p>
            <div className="flex justify-between">
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-8 py-2 rounded hover:bg-red-600"
              >
                Yes
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 px-8 py-2 rounded hover:bg-gray-600"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
