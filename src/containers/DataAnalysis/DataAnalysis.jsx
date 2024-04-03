import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

import svgjsline1438 from "../../assets/svgjsline1438.svg";
import sliderContainer from "../../assets/slider-container.svg";
import svgjsline1393 from "../../assets/svgjsline1393.svg";
import inputFC from "../../assets/input-form-container.svg";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

const DataAnalysis = () => {
  const [users, setUsers] = useState([]);
  const [feeds, setFeeds] = useState([]);
  const chartRef = useRef(null);

  console.log(feeds);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://devv.legacyx.uk/api/auth/allProfile"
        );
        const userData = await response.json();
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        const response = await fetch(
          "https://devv.legacyx.uk/api/entity/feed",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        const feedData = await response.json();
        setFeeds(feedData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("Users changed:", users);
    renderChart();
  }, [users]);

  useEffect(() => {
    console.log("Feeds changed:", feeds);
    feedrenderChart();
  }, [feeds]);

  const countUsersByMonth = () => {
    const currentDate = new Date();
    const monthlyCounts = Array(6).fill(0);
    users.forEach((user) => {
      const createdAtDate = new Date(user.createdAt);
      const diffMonths =
        (currentDate.getFullYear() - createdAtDate.getFullYear()) * 12 +
        (currentDate.getMonth() - createdAtDate.getMonth());
      if (diffMonths < 6) {
        monthlyCounts[5 - diffMonths]++;
      }
    });
    return monthlyCounts;
  };


  
  const countFeedsByMonth = () => {
    const currentDate = new Date();
    const monthlyCounts = Array(6).fill(0);
    users.forEach((feed) => {
      const createdAtDate = new Date(feed.createdAt);
      const diffMonths =
        (currentDate.getFullYear() - createdAtDate.getFullYear()) * 12 +
        (currentDate.getMonth() - createdAtDate.getMonth());
      if (diffMonths < 6) {
        monthlyCounts[5 - diffMonths]++;
      }
    });
    return monthlyCounts;
  };

  const getMonthName = (monthIndex) => {
    const currentDate = new Date();
    const targetDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - monthIndex,
      1
    );
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[targetDate.getMonth()];
  };

  const renderChart = () => {
    const monthlyCounts = countUsersByMonth();
    if (chartRef.current !== null) {
      chartRef.current.destroy(); // Destroy previous chart
    }
    const ctx = document.getElementById("userChart");
    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          getMonthName(5),
          getMonthName(4),
          getMonthName(3),
          getMonthName(2),
          getMonthName(1),
          getMonthName(0),
        ],
        datasets: [
          {
            label: "User Registrations",
            data: monthlyCounts,
            backgroundColor: "rgba(54, 162, 235, 0.5)", // Blue color
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Number of Users",
            },
          },
          x: {
            title: {
              display: true,
              text: "Month",
            },
          },
        },
      },
    });
  };

  const feedrenderChart = () => {
    const monthlyCounts = countFeedsByMonth();
    if (chartRef.current !== null) {
      chartRef.current.destroy(); // Destroy previous chart
    }
    const ctx = document.getElementById("feedChart");
    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          getMonthName(5),
          getMonthName(4),
          getMonthName(3),
          getMonthName(2),
          getMonthName(1),
          getMonthName(0),
        ],
        datasets: [
          {
            label: "Feed Registrations",
            data: monthlyCounts,
            backgroundColor: "rgba(54, 162, 235, 0.5)", // Blue color
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Number of Feeds",
            },
          },
          x: {
            title: {
              display: true,
              text: "Month",
            },
          },
        },
      },
    });
  };

  return (
    <section class="flex-1 ml-[19rem] mt-[8rem] rounded-xl bg-gray-200 flex flex-row flex-wrap items-start justify-start p-[2rem] box-border gap-[0rem_1.5rem] min-h-[55.313rem] max-w-[calc(100%_-_300px)] text-left text-[1.625rem] text-white font-gilroy mq900:max-w-full mq450:pt-[1.313rem] mq450:pb-[1.313rem] mq450:box-border">
      <div class="flex-1 rounded-[18.28px] bg-gray-300 shadow-[0px_0px_13.71px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start pt-[1.5rem] pb-[1.188rem] pr-[0.813rem] pl-[1rem] box-border relative gap-[2.688rem_0rem] min-w-[20.188rem] max-w-full z-[1] mq675:gap-[2.688rem_0rem]">
        <div class="w-[31rem] h-[20.688rem] relative rounded-[18.28px] bg-gray-300 shadow-[0px_0px_13.71px_rgba(0,_0,_0,_0.15)] hidden max-w-full z-[0]"></div>
        <div class="w-full h-full absolute !m-[0] top-[0.125rem] left-[calc(50%_-_246px)] rounded-[18.28px] bg-gray-100 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] z-[2]"></div>
        <div class="w-[14.125rem] flex flex-row items-start justify-start py-[0rem] px-[0.5rem] box-border">
          <div class="flex-1 relative leading-[1.425rem] capitalize font-medium shrink-0 z-[3] mq450:text-[1.313rem] mq450:leading-[1.375rem]">
            Users registered
          </div>
        </div>
        <div class="self-stretch flex flex-col items-start justify-start gap-[0.188rem_0rem] max-w-full text-right text-[0.588rem] text-gray-800">
          <div class="relative z-[3]">100</div>
          <div class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.313rem] box-border max-w-full">
            <div class="flex-1 flex flex-col items-end justify-start gap-[0.375rem_0rem] max-w-full">
              <div class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.688rem] pl-[0rem] box-border max-w-full">
                <div class="flex-1 flex flex-row items-start justify-start gap-[0rem_1rem] max-w-full mq675:flex-wrap">
                  <div class="w-[0.625rem] flex flex-col items-start justify-start pt-[1.063rem] px-[0rem] pb-[0rem] box-border">
                    <div class="self-stretch flex flex-col items-end justify-start gap-[1.25rem_0rem]">
                      <div class="relative z-[3]">80</div>
                      <div class="relative z-[3]">60</div>
                      <div class="relative z-[3]">40</div>
                      <div class="relative z-[3]">20</div>
                      <div class="relative z-[3]">0</div>
                    </div>
                  </div>
                  <div class="flex-1 flex flex-row items-start justify-center pt-[0rem] px-[0rem] pb-[0.375rem] box-border relative min-w-[17.25rem] max-w-full">
                    <img
                      class="h-full w-full absolute !m-[0] top-[0.006rem] right-[0.019rem] bottom-[0.031rem] left-[-0.025rem] max-w-full overflow-hidden max-h-full z-[4]"
                      alt=""
                      src={inputFC}
                    />

                    <div class="flex-1 flex flex-col items-start justify-start relative gap-[0.063rem_0rem] max-w-full">
                      <div class="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] mq675:flex-wrap">
                        <img
                          class="h-[11.4rem] w-[0.063rem] relative z-[3] mq675:w-full mq675:h-[0.063rem]"
                          loading="lazy"
                          alt=""
                          src={svgjsline1393}
                        />

                        <img
                          class="h-[0rem] flex-1 relative max-w-full overflow-hidden min-w-[17.25rem] z-[6]"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <img
                        class="w-full h-full absolute !m-[0] top-[0.006rem] right-[0.019rem] left-[-0.025rem] max-w-full overflow-hidden shrink-0 z-[5]"
                        alt=""
                        src={sliderContainer}
                      />

                      <img
                        class="self-stretch h-[0.063rem] relative max-w-full overflow-hidden shrink-0 z-[3]"
                        loading="lazy"
                        alt=""
                        src={svgjsline1438}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-[28rem] flex flex-row items-start justify-between py-[0rem] pr-[0.375rem] pl-[0rem] box-border gap-[1.25rem] max-w-full text-center text-[0.731rem] mq450:flex-wrap">
                <div class="relative z-[3]">Jan</div>
                <div class="relative z-[3]">Feb</div>
                <div class="flex flex-col items-start justify-start py-[0rem] pr-[0.25rem] pl-[0rem]">
                  <div class="relative z-[3]">Mar</div>
                </div>
                <div class="relative z-[3]">Apr</div>
                <div class="relative z-[3]">May</div>
                <div class="relative z-[3]">Jun</div>
                <div class="relative z-[3]">July</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 rounded-[18.28px] bg-gray-300 shadow-[0px_0px_13.71px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start pt-[1.5rem] pb-[1.188rem] pr-[0.875rem] pl-[1.063rem] box-border relative gap-[3.438rem_0rem] min-w-[20.188rem] max-w-full z-[1] mq675:gap-[3.438rem_0rem]">
        <div class="w-[31rem] h-[20.688rem] relative rounded-[18.28px] bg-gray-300 shadow-[0px_0px_13.71px_rgba(0,_0,_0,_0.15)] hidden max-w-full z-[0]"></div>
        <div class="w-full h-full absolute !m-[0] top-[0.125rem] left-[0.106rem] rounded-[18.28px] bg-gray-100 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] z-[2]"></div>
        <div class="w-[14.313rem] flex flex-row items-start justify-start py-[0rem] px-[0.375rem] box-border">
          <div class="flex-1 relative leading-[1.425rem] capitalize font-medium z-[3] mq450:text-[1.313rem] mq450:leading-[1.375rem]">
            content created
          </div>
        </div>
        <div class="self-stretch flex flex-col items-end justify-start gap-[0.375rem_0rem] max-w-full text-right text-[0.675rem] text-gray-800">
          <div class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.688rem] pl-[0.063rem] box-border max-w-full">
            <div class="flex-1 flex flex-row items-end justify-start gap-[0rem_0.688rem] max-w-full mq675:flex-wrap">
              <div class="h-[11.938rem] w-[1.125rem] flex flex-col items-end justify-start gap-[1.438rem_0rem]">
                <div class="relative z-[3]">100</div>
                <div class="flex flex-row items-start justify-start py-[0rem] px-[0.125rem]">
                  <div class="relative z-[3]">80</div>
                </div>
                <div class="relative z-[3]">60</div>
                <div class="relative z-[3]">40</div>
                <div class="relative z-[3]">20</div>
                <div class="flex flex-row items-start justify-start py-[0rem] px-[0.063rem]">
                  <div class="relative z-[3]">0</div>
                </div>
              </div>
              <div class="flex-1 flex flex-row items-start justify-center pt-[0rem] px-[0rem] pb-[0.375rem] box-border relative min-w-[17.25rem] max-w-full">
                <img
                  class="h-full w-full absolute !m-[0] top-[0.006rem] right-[-0.025rem] bottom-[0.031rem] left-[0.019rem] max-w-full overflow-hidden max-h-full z-[4]"
                  alt=""
                  src={inputFC}
                />

                <div class="flex-1 flex flex-col items-start justify-start relative gap-[0.063rem_0rem] max-w-full">
                  <div class="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] mq675:flex-wrap">
                    <img
                      class="h-[11.4rem] w-[0.063rem] relative z-[3] mq675:w-full mq675:h-[0.063rem]"
                      alt=""
                      src={svgjsline1393}
                    />

                    <img
                      class="h-[0rem] flex-1 relative max-w-full overflow-hidden min-w-[17.25rem] z-[6]"
                      alt=""
                    />
                  </div>
                  <img
                    class="w-full h-full absolute !m-[0] top-[0.006rem] right-[-0.025rem] left-[0.019rem] max-w-full overflow-hidden shrink-0 z-[5]"
                    alt=""
                    src={sliderContainer}
                  />

                  <img
                    class="self-stretch h-[0.063rem] relative max-w-full overflow-hidden shrink-0 z-[3]"
                    alt=""
                    src={svgjsline1438}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="w-[28rem] flex flex-row items-start justify-between py-[0rem] pr-[0.375rem] pl-[0rem] box-border gap-[1.25rem] max-w-full text-center text-[0.731rem] mq450:flex-wrap">
            <div class="relative z-[3]">Jan</div>
            <div class="relative z-[3]">Feb</div>
            <div class="flex flex-col items-start justify-start py-[0rem] pr-[0.25rem] pl-[0rem]">
              <div class="relative z-[3]">Mar</div>
            </div>
            <div class="relative z-[3]">Apr</div>
            <div class="relative z-[3]">May</div>
            <div class="relative z-[3]">Jun</div>
            <div class="relative z-[3]">July</div>
          </div>
        </div>
      </div>

      <div class="flex-1 rounded-[18.28px] mt-5 bg-gray-300 shadow-[0px_0px_13.71px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start pt-[1.5rem] pb-[1.188rem] pr-[0.813rem] pl-[1rem] box-border relative gap-[2.688rem_0rem] min-w-[20.188rem] max-w-full z-[1] mq675:gap-[2.688rem_0rem]">
        <h2>User Registration </h2>
        <canvas id="userChart" width="400" height="200"></canvas>
        <canvas id="feedChart" width="400" height="200"></canvas>
      </div>
    </section>
  );
};

export default DataAnalysis;
