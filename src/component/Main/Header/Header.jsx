/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import userImage from "/public/Auth/user.png";
import { useGetUserProfileQuery } from "../../../redux/features/setting/settingApi";
import { useEffect, useRef, useState } from "react";
import Url from "../../../redux/baseApi/forImageUrl";

const Header = ({ toggleSidebar }) => {
  const { data: userProfile, refetch } = useGetUserProfileQuery();
  const user = userProfile?.data;

  const [openNotify, setOpenNotify] = useState(false);
  const notifyRef = useRef(null);

  useEffect(() => {
    refetch();
  }, [refetch]);

  /* ---------- CLOSE ON OUTSIDE CLICK ---------- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notifyRef.current && !notifyRef.current.contains(e.target)) {
        setOpenNotify(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ---------- DEMO DATA ---------- */
  const notifications = [
    {
      id: 1,
      title: "New Subscription",
      message: "Tasmia Hassan subscribed to Standard plan",
      time: "2 min ago",
    },
    {
      id: 2,
      title: "Payment Received",
      message: "৳900 payment completed successfully",
      time: "10 min ago",
    },
    {
      id: 3,
      title: "Account Blocked",
      message: "Naim Rahman has been blocked",
      time: "1 hour ago",
    },
    {
      id: 4,
      title: "Account Blocked",
      message: "Naim Rahman has been blocked",
      time: "1 hour ago",
    },
    {
      id: 5,
      title: "Account Blocked",
      message: "Naim Rahman has been blocked",
      time: "1 hour ago",
    },
  ];

  return (
    <div className="w-full px-5 py-3.5 bg-[#1a3c58] flex justify-between items-center text-white sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <button
          className="md:hidden text-white text-3xl"
          onClick={toggleSidebar}
        >
          <FiMenu />
        </button>
      </div>

      <div className="flex items-center  gap-5 relative">
        {/* ---------------- Notification ---------------- */}
        <div className="relative" ref={notifyRef}>
          <button
            onClick={() => setOpenNotify(!openNotify)}
            className="relative p-2 rounded-full bg-white text-[#1a3c58] hover:bg-gray-200"
          >
            <MdNotificationsNone className="size-8" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* ----------- DROPDOWN ----------- */}
          {openNotify && (
            <div className="absolute -right-10 sm:right-0 mt-3 w-[320px] bg-[#1a3c58] rounded-xl shadow-xl z-50 border border-gray-500">
              <div className="px-4 py-3 border-b border-gray-500">
                <h3 className="text-sm font-semibold">Notifications</h3>
              </div>

              <div className="max-h-[300px] scroll_Hide_item overflow-y-auto p-2 space-y-1">
                {notifications.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#0f2435] p-2 rounded-md hover:bg-[#132f44] cursor-pointer"
                  >
                    <h4 className="text-sm text-orange-400">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-300">
                      {item.message}
                    </p>
                    <span className="text-[10px] text-gray-400 mt-1 block">
                      {item.time}
                    </span>
                  </div>
                ))}

                {notifications.length === 0 && (
                  <p className="text-center text-gray-400 text-sm py-4">
                    No notifications
                  </p>
                )}
              </div>

              <div className="px-4 py-2 border-t border-gray-500">
                <button
                  onClick={() => setOpenNotify(false)}
                  className="w-full bg-orange-500 py-2 rounded-md text-sm font-medium"
                >
                  Mark all as read
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ---------------- Profile ---------------- */}
        <Link to={"/settings/personal-info"}>
          <img
            className="w-12 rounded-full cursor-pointer"
            src={
              user?.profileImageUrl
                ? Url + user?.profileImageUrl
                : userImage
            }
            alt="User"
          />
        </Link>

        <div className="hidden md:block">
          <h1 className="text-sm font-medium">{user?.fullName}</h1>
          <span className="text-xs text-gray-300">{user?.role}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
