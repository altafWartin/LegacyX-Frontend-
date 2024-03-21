import React, { useEffect, useState } from "react";
import ellipse from "../../assets/ellipse-2@2x.png";
import group42a from "../../assets/group-4@2x.png";
import vector12 from "../../assets/vector-12.svg";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Link, useNavigate } from "react-router-dom"; // Importing useNavigate hook

const User = () => {
  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate(); // Initializing the useNavigate hook

  useEffect(() => {
    async function fetchData() {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          throw new Error("Access token not found in local storage");
        }

        const response = await fetch(
          "http://localhost:4400/api/auth/allProfile",
          {
            headers: {
              access_token: `${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user profiles");
        }

        const data = await response.json();
        setProfiles(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching user profiles:", error);
      }
    }

    fetchData();
  }, []);

  const fetchSingleProfile = async (userId) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await fetch(
        `http://localhost:4400/api/auth/singleProfile/${userId}`,
        {
          headers: {
            access_token: accessToken,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch single profile");
      }

      const data = await response.json();
      navigate(`/userProfile/${userId}`, { state: { profile: data } });

      console.log("Single Profile:", data);
      // Handle the fetched single profile data as needed
    } catch (error) {
      console.error("Error fetching single profile:", error);
    }
  };

  return (
    <div class="flex-1 rounded-xl text-white bg-gray-200  flex flex-col items-center justify-start pt-[2.375rem] px-[2.125rem] pb-[5.125rem] box-border gap-[1.375rem_0rem] max-w-[calc(100%_-_300px)] mq900:pt-[1.563rem] mq900:pb-[3.313rem] mq900:box-border mq900:max-w-full mq450:pt-[1.25rem] mq450:pb-[2.125rem] mq450:box-border">
      <div class="w-[61.25rem] flex flex-row items-center justify-between pt-[0rem] px-[0rem] pb-[0.188rem] box-border gap-[1.25rem] text-[2.375rem]">
        <h1 class="m-0 h-[2rem] relative text-inherit leading-[2.375rem] capitalize font-semibold font-inherit inline-block z-[1] mq900:text-[1.875rem] mq900:leading-[1.875rem] mq450:text-[1.438rem] mq450:leading-[1.438rem]">
          users
        </h1>
        <div class="rounded-3xs flex flex-row items-center justify-start py-[1.063rem] pr-[1.188rem] pl-[1.063rem] gap-[1.125rem] z-[1] text-[1.125rem] border-[0.6px] border-solid border-white">
          <div class="h-[2.875rem] w-[12.438rem] relative rounded-3xs box-border hidden border-[0.6px] border-solid border-white"></div>
          <div class="flex flex-row items-start justify-start gap-[0rem_0.813rem]">
            <div class="relative leading-[0.75rem] capitalize z-[1]">
              sort by :
            </div>
            <div class="relative leading-[0.75rem] capitalize z-[1]">
              recent
            </div>
          </div>
          <img
            class="h-[0.25rem] w-[0.5rem] color-white relative z-[1]"
            loading="lazy"
            alt=""
            src={vector12}
          />
        </div>
      </div>
      <div className="h-[500px] overflow-y-auto ">
        {profiles.map((profile) => (
          <div
            key={profile._id}
            onClick={() => fetchSingleProfile(profile._id)}
            className="w-[61.25rem] rounded-sm bg-gray-100 mb-3 no-underline text-white cursor-pointer shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] flex flex-row items-center justify-between py-[0.875rem] pr-[1.938rem] pl-[0.875rem] box-border gap-[1.25rem] z-[1]"
          >
            <div className="h-[5rem] w-[63.25rem] relative rounded-sm bg-gray-100 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] hidden max-w-full"></div>
            <div className="flex flex-row items-center justify-start gap-[0rem_1.813rem]">

              <Stack direction="row" spacing={2}>
                <Avatar
                  alt={profile.username}
                  src={profile.profileImage}
                  sx={{ width: 56, height: 56 }}
                />
              </Stack>
              <div className="h-[0.75rem] relative leading-[1.125rem] capitalize flex items-center z-[2]">
                {profile.username}
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.25rem] pl-[0rem]">
              <div className="h-[0.75rem] relative leading-[1.125rem] capitalize flex items-center shrink-0 whitespace-nowrap z-[2]">
                {profile.email}
              </div>
            </div>
            <div className="h-[0.75rem] relative leading-[1.125rem] capitalize flex items-center z-[2]">
              {profile.otp}
            </div>
            <img
              className="h-[1.625rem] w-[0.375rem] relative object-contain z-[2]"
              loading="lazy"
              alt=""
              src={group42a}
            />
          </div>
        ))}
      </div>
      {/*   
      <Link
        to="/userProfile"
        class="w-[63.25rem] rounded-sm bg-gray-100 no-underline text-white cursor-pointer shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] flex flex-row items-center justify-between py-[0.875rem] pr-[1.938rem] pl-[0.875rem] box-border gap-[1.25rem] z-[1]"
      >
        <div class="h-[5rem] w-[63.25rem] relative rounded-sm bg-gray-100 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] hidden max-w-full"></div>
        <div class="flex flex-row items-center justify-start gap-[0rem_1.813rem]">
          <img
            class="h-[3.25rem] w-[3.25rem] relative rounded-[50%] object-cover z-[2]"
            loading="lazy"
            alt=""
            src={ellipse}
          />

          <div class="h-[0.75rem] relative leading-[1.125rem] capitalize flex items-center z-[2]">
            henry peter
          </div>
        </div>
        <div class="flex flex-col items-start justify-start py-[0rem] pr-[0.25rem] pl-[0rem]">
          <div class="h-[0.75rem] relative leading-[1.125rem] capitalize flex items-center shrink-0 whitespace-nowrap z-[2]">
            henry221@gmail.com
          </div>
        </div>
        <div class="h-[0.75rem] relative leading-[1.125rem] capitalize flex items-center z-[2]">
          013 568 425 85
        </div>
        <img
          class="h-[1.625rem] w-[0.375rem] relative object-contain z-[2]"
          loading="lazy"
          alt=""
          src={group42a}
        />
      </Link> */}
    </div>
  );
};

export default User;
