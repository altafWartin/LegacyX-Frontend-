import React from "react";
import DataAnalysis from "./DataAnalysis/DataAnalysis";

import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import User from "./User/User";
import Content from "./Content/Content";
import Notifications from "./Notifications/Notifications";
import UserProfile from "./User/UserProfile";
import Login from "./Login/Login";

const AuthorizedCom = () => {
  return (
    <div>
      <div class="w-full relative bg-gray-400 overflow-hidden flex flex-col items-center justify-start pt-[1.188rem] pb-[2.125rem] pr-[1.5rem] pl-[2.188rem] box-border gap-[0.875rem_0rem] tracking-[normal]">
        <Navbar />
        <main class="self-stretch flex flex-row items-start justify-start gap-[0rem_0.875rem] max-w-full shrink-0 text-left text-[1.125rem] text-gray-200 font-gilroy">
          <Sidebar />
          <Routes>
            <Route path="/" element={<DataAnalysis />} />
            <Route path="/user" element={<User />} />
            <Route path="/userProfile/:userId" element={<UserProfile />} />
            <Route path="/content" element={<Content />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AuthorizedCom;
