import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import group1 from "../../assets/Group 1.svg";
import group2 from "../../assets/group-2.svg";
import group3 from "../../assets/group-3.svg";
import vector from "../../assets/Vector.png";
import User1 from "../../assets/User1.svg";
import vector1 from "../../assets/vector-1.svg";
import vector2 from "../../assets/vector-2.svg";
import notification from "../../assets/notification-bell1394.svg";
import vectorC from "../../assets/Vector copy.svg";

import DAW from "../../assets/VectorDAW.svg";
import DAB from "../../assets/VectorDAB.svg";
import contentB from "../../assets/Group 1ContentB.svg";
import notifiB from "../../assets/NBB.svg";

const Sidebar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const isLinkActive = (path) => {
    return path === activeLink;
  };

  return (
    <div class="w-[17.875rem] rounded-xl bg-gray-200 fixed mt-[8rem] flex flex-col items-center justify-start pt-[1.75rem] px-[1.188rem] pb-[29rem] box-border gap-[1.625rem_0rem] mq900:hidden mq900:pt-[1.25rem] mq900:pb-[18.875rem] mq900:box-border mq450:pb-[12.25rem] mq450:box-border">
      <Link
        to="/"
        onClick={() => handleLinkClick("/")}
        className={`self-stretch rounded-3xs no-underline flex flex-row items-center justify-start pt-[0.875rem] px-[0.938rem] pb-[0.813rem] gap-[0rem_1.188rem] whitespace-nowrap z-[1] ${
          isLinkActive("/") ? "bg-white text-black active " : "text-white"
        }`}
      >
        {isLinkActive("/") ? (
          <>
            {" "}
            <img
              class="h-[1.313rem] w-[1.5rem] relative z-[2]"
              loading="lazy"
              alt=""
              src={DAB}
            />
          </>
        ) : (
          <>
            {" "}
            <img
              class="h-[1.313rem] w-[1.5rem]  z-[2]"
              loading="lazy"
              alt=""
              src={DAW}
            />
          </>
        )}

        <div class="relative leading-[1.125rem] z-[2]">Data Analysis</div>
      </Link>
      <div class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.625rem] pl-[0.938rem] text-white">
        <div class="flex-1 flex flex-row items-start justify-start gap-[0rem_0.75rem]">
          <div class="flex-1 flex flex-col items-start justify-start pt-[0.188rem] px-[0rem] pb-[0rem]">
            <div class="self-stretch flex flex-col items-start justify-start ">
              <Link
                to="/user"
                onClick={() => handleLinkClick("/user")}
                className={`self-stretch rounded-3xs no-underline flex flex-row items-center py-3 justify-start  gap-[0rem_1.188rem] whitespace-nowrap z-[1] ${
                  isLinkActive("/user")
                    ? "bg-white text-black active  pl-5"
                    : "text-white"
                }`}
              >
                {isLinkActive("/user") ? (
                  <>
                    {" "}
                    <img
                      className="h-[1.313rem] w-[1.5rem] z-[2] "
                      loading="lazy"
                      alt=""
                      src={User1}
                    />
                  </>
                ) : (
                  <>
                    {" "}
                    <img
                      className="h-[1.313rem] w-[1.5rem] z-[2] "
                      loading="lazy"
                      alt=""
                      src={vectorC}
                    />
                  </>
                )}

                <div className="relative leading-[1.125rem] z-[2]">User</div>
              </Link>

              <Link
                to="/content"
                onClick={() => handleLinkClick("/content")}
                className={`self-stretch rounded-3xs no-underline flex flex-row items-center py-3 justify-start  gap-[0rem_1.188rem] whitespace-nowrap z-[1] ${
                  isLinkActive("/content")
                  ? "bg-white text-black active  pl-5"

                    : "text-white"
                }`}
              >
                {isLinkActive("/content") ? (
                  <>
                    {" "}
                    <img
                      className="h-[1.313rem] w-[1.5rem] z-[2] "
                      loading="lazy"
                      alt=""
                      src={contentB}
                    />
                  </>
                ) : (
                  <>
                    {" "}
                    <img
                      class="w-[1.25rem] h-[1.125rem] fill-current text-green-600 relative z-[1]"
                      // loading="lazy"
                      alt=""
                      src={group1}
                    />
                  </>
                )}

                <div class="relative leading-[1.125rem] z-[1]">Content</div>
              </Link>

              <Link
                to="/notifications"
                onClick={() => handleLinkClick("/notifications")}
                className={`self-stretch rounded-3xs no-underline flex flex-row items-center py-3 justify-start  gap-[0rem_1.188rem] whitespace-nowrap z-[1] ${
                  isLinkActive("/notifications")
                  ? "bg-white text-black active  pl-5"

                    : "text-white"
                }`}
              >
                {isLinkActive("/notifications") ? (
                  <>
                    {" "}
                    <img
                      className="h-[1.313rem] w-[1.5rem] z-[2] "
                      loading="lazy"
                      alt=""
                      src={notifiB}
                    />
                  </>
                ) : (
                  <>
                    {" "}
                    <img
                  class="h-[1.375rem] w-[1.25rem] fill-white relative"
                  loading="lazy"
                  alt=""
                  src={notification}
                />{" "}
                  </>
                )}

                <div className="relative leading-[1.125rem] z-[2]">Notification</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
