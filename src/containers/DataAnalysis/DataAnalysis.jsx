import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

import svgjsline1438 from "../../assets/svgjsline1438.svg";
import sliderContainer from "../../assets/slider-container.svg";
import svgjsline1393 from "../../assets/svgjsline1393.svg";
import inputFC from "../../assets/input-form-container.svg";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import UserChart from "./UserChart";
import FeedChart from "./FeedChart";

const DataAnalysis = () => {
  return (
    <section class="flex-1 ml-[19rem] mt-[8rem] rounded-xl bg-gray-200 flex flex-row flex-wrap items-start justify-start p-[2rem] box-border gap-[0rem_1.5rem] min-h-[55.313rem] max-w-[calc(100%_-_300px)] text-left text-[1.625rem] text-white font-gilroy mq900:max-w-full mq450:pt-[1.313rem] mq450:pb-[1.313rem] mq450:box-border">
      <div className="d-flex gap-6">
        <UserChart />
        <FeedChart />
      </div>
    </section>
  );
};

export default DataAnalysis;
