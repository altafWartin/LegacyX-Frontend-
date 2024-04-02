import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import rectangle from "../../assets/rectangle-19@2x.png";
import rectangle1 from "../../assets/rectangle-19@2x.png";
import vector from "../../assets/vector-21.svg";
import vector12 from "../../assets/vector-12.svg";
import group9 from "../../assets/group-9.svg";
import group51 from "../../assets/group-5-1.svg";
import EditHide from "../../assets/edit--hide.svg";
import group5 from "../../assets/group-5.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Profile from "../../assets/Rectangle 58.svg";

const UserProfile = () => {
  const location = useLocation();
  const profileData = location.state.profile;

  console.log(profileData);
  const [mediaData, setMediaData] = useState(null);

  useEffect(() => {
    async function getAllMediaByUser(userId) {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          throw new Error("Access token not found in local storage");
        }

        const response = await fetch(
          `https://devv.legacyx.uk/api/entity/user/${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: accessToken,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch media by user");
        }

        const data = await response.json();
        setMediaData(data);

        console.log(data.allMedia.name, "media");
      } catch (error) {
        console.error("Error fetching media by user:", error);
      }
    }

    const userId = profileData._id; // Replace with actual user ID
    getAllMediaByUser(userId);
  }, []);

  return (
    <div className="w-full h-[1200px]  ml-[19rem] mt-[8rem]">
      <section class="flex-1 h-[900px] rounded-xl w-full bg-gray-200 flex flex-col items-start justify-start pt-[2.125rem] pb-[3.625rem] pr-[2.063rem] pl-[2.125rem] box-border gap-[2.063rem_0rem]  text-left text-[1.125rem] text-white font-gilroy mq675:gap-[1rem_0rem] mq900:pt-[1.375rem] mq900:pb-[2.375rem] mq900:box-border mq900:max-w-full mq450:pt-[1.25rem] mq450:pb-[1.563rem] mq450:box-border">
        <div className="w-full">
          {/* <img
          class="w-[11.438rem] h-[11.438rem] relative rounded-[22px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src={Profile}
        /> */}
          <Stack direction="row" spacing={2}>
            <Avatar
              variant="rounded"
              src={profileData.profileImage}
              alt={profileData.username}
              sx={{ width: 180, height: 180, borderRadius: 8 }}
            />
          </Stack>

          <div class="self-stretch mt-6 flex flex-col items-start justify-start gap-[1.5rem_0rem] max-w-full">
            <div class="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0rem_1.5rem] max-w-full">
              <div class="flex-1 flex flex-col items-start justify-start gap-[1.5rem_0rem] min-w-[20.063rem] max-w-full">
                <div class="self-stretch flex flex-col items-start justify-start gap-[0.875rem_0rem]">
                  <div class="h-[0.75rem] relative leading-[1.125rem] capitalize flex items-center shrink-0 z-[1]">
                    username
                  </div>
                  <input
                    className="w-full border-none outline-none  self-stretch h-[3.375rem] rounded-3xs flex flex-row items-start justify-start py-[1.313rem] px-[1.125rem] box-border font-gilroy font-light text-[1.125rem] text-gray-400 min-w-[15.625rem] z-[1]"
                    placeholder={profileData.email}
                    type="text"
                  />
                </div>
                <div class="self-stretch flex flex-col items-start justify-start gap-[0.875rem_0rem]">
                  <div class="w-[3.063rem] h-[0.75rem] relative leading-[1.125rem] capitalize flex items-center shrink-0 z-[1]">
                    email
                  </div>
                  <input
                    class="w-full [border:none] [outline:none] self-stretch h-[3.375rem] rounded-3xs flex flex-row items-start justify-start py-[1.313rem] px-[1.125rem] box-border font-gilroy font-light text-[1.125rem] text-gray-400 min-w-[15.625rem] z-[1]"
                    placeholder={profileData.email}
                    type="text"
                  />
                </div>
              </div>
              <div class="flex-1 flex flex-col items-start justify-start gap-[1.5rem_0rem] min-w-[20.063rem] max-w-full">
                <div class="self-stretch flex flex-col items-start justify-start gap-[0.875rem_0rem]">
                  <div class="h-[0.75rem] relative leading-[1.125rem] capitalize flex items-center shrink-0 z-[1]">
                    full name
                  </div>
                  <input
                    class="w-full [border:none] [outline:none]  self-stretch h-[3.375rem] rounded-3xs flex flex-row items-start justify-start py-[1.313rem] px-[1.125rem] box-border font-gilroy font-light text-[1.125rem] text-gray-400 min-w-[15.625rem] z-[1]"
                    placeholder={profileData.username}
                    type="text"
                  />
                </div>
                <div class="self-stretch flex flex-col items-start justify-start gap-[0.875rem_0rem]">
                  <div class="h-[0.75rem] relative leading-[1.125rem] capitalize flex items-center shrink-0 z-[1]">
                    phone number
                  </div>
                  <input
                    class="w-full [border:none] [outline:none] self-stretch h-[3.375rem] rounded-3xs flex flex-row items-start justify-start py-[1.313rem] px-[1.125rem] box-border font-gilroy font-light text-[1.125rem] text-gray-400 min-w-[15.625rem] z-[1]"
                    placeholder="433 558 996 52"
                    type="text"
                  />
                </div>{" "}
              </div>
            </div>
            <div className="w-[850px]">
              <div className="mt-10  ">
                <h3 class="m-0 h-[1.375rem] mb-4 relative text-[1.625rem] leading-[1.625rem] capitalize font-semibold font-inherit inline-block shrink-0 z-[1] mq450:text-[1.313rem] mq450:leading-[1.313rem]">
                  content uploaded
                </h3>

                <div className="flex gap-4 overscroll-x-auto overflow-auto ">
                  {mediaData &&
                    mediaData.allMedia.map((media, index) => (
                      <div
                        key={index}
                        class="self-stretch  rounded-sm bg-gray-100 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-start pt-[0.625rem] px-[0.563rem] pb-[1.313rem] box-border gap-[1.125rem_0rem] max-w-full z-[1] text-[1.375rem]"
                      >
                        <div class="self-stretch rounded-3xs flex flex-col items-start justify-start p-[0.5rem] gap-[7.25rem_0rem] bg-cover bg-no-repeat bg-[top] z-[2] relative">
                          <img
                            class="w-[18.0rem] h-[12.375rem] relative rounded-3xs object-cover z-[0]"
                            alt={media.name}
                            src={media.url}
                          />
                          {/* <ReactPlayer
                          style={{
                            width: "18rem",
                            height: "12.375rem",
                            position: "relative",
                            borderRadius: "3px", // I'm assuming 'rounded-3xs' means 3px border-radius
                            objectFit: "cover",
                            zIndex: 0,
                          }}
                          url={media.url}
                        /> */}

                          <div class="form-check absolute top-0 left-0 ml-[1rem] mt-[0.6rem]">
                            <input
                              class="form-check-input w-[1.875rem] h-[1.875rem]"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                          </div>
                          <button class="cursor-pointer [border:none] pt-[0.688rem] m-[1rem]  pb-[0.75rem] pr-[1.125rem] pl-[1.188rem] bg-gray-700 rounded-md [backdrop-filter:blur(20px)] flex flex-row items-center justify-center z-[3] hover:bg-gainsboro-200 absolute bottom-0 left-0 m-[0.5rem]">
                            <div class="relative text-[1rem] leading-[1rem] capitalize font-gilroy text-white text-center z-[4]">
                              {media.entityType}
                            </div>
                          </button>
                        </div>
                        <div class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.313rem] pl-[0rem]">
                          <div class="flex-1 flex flex-row items-end justify-between gap-[1.25rem]">
                            <h3 class="m-0 relative text-inherit leading-[1.125rem] capitalize font-medium font-inherit z-[2] mq450:text-[1.125rem] mq450:leading-[1.125rem]">
                              {media.tags}
                            </h3>
                            <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                              <img
                                class="w-[1.438rem] h-[0.313rem] relative z-[2]"
                                loading="lazy"
                                alt=""
                                src={group9}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="self-stretch h-[2.375rem] flex flex-row items-start justify-start text-[1rem]">
                          <div class="self-stretch w-[16.313rem] relative leading-[1.375rem] capitalize inline-block shrink-0 z-[2]">
                            {media.caption}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
