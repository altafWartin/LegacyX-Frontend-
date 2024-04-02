import React, { useEffect, useState } from "react";
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
import Example from "./Dropdown";

const Content = () => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const [selectedContentId, setSelectedContentId] = useState(null); // State variable to hold selected content ID

  const handleClick = (event, contentId) => {
    setAnchorEl(event.currentTarget);
    setSelectedContentId(contentId); // Store the content ID of the clicked item
    console.log("contentID",contentId)
    console.log("selectd",selectedContentId);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    // Define a function to fetch media feed
    async function fetchMediaFeed() {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          throw new Error("Access token not found in local storage");
        }
        const response = await fetch(
          "https://devv.legacyx.uk/api/entity/feed",
          {
            headers: {
              "Content-Type": "application/json",
              authorization: accessToken,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch media feed");
        }
        const data = await response.json();
        setMedia(data.allMedia);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    // Call the fetchMediaFeed function
    fetchMediaFeed();
  }, []); // Empty dependency array ensures the effect runs only once

  const handleDeleteMedia = async (mediaId) => {
    console.log(mediaId);
    try {
      const response = await fetch(
        `htt://localhost:4400/api/entity/delete/${mediaId}`,
        {
          method: "GET",
        }
      );

      console.log(mediaId);
      if (response.ok) {
        // If deletion is successful, remove the media item from the state or re-fetch the media list
        const data = await response.json();
        console.log(data.message); // Log success message

        // console.log("Media deleted successfully");
      } else {
        console.error("Failed to delete media");
      }
    } catch (error) {
      console.error("An error occurred while deleting media:", error);
    }
  };

  // Inside your rendering logic

  if (loading) {
    return (
      <div class="  px-[450px] bg-black pt-[50px] pb-[50px] h-[100vh] text-left text-[1.125rem] text-white font-gilroy bg-gray-400 shadow-[0px_4px_74px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[5.75rem] box-border gap-[18.31rem] tracking-[normal] mq700:gap-[18.31rem] mq950:flex-wrap mq975:gap-[18.31rem]">
        Loading...
      </div>
    );
  }

  if (error) {
    return;
    <div class="  px-[450px] pt-[50px] pb-[50px] h-[100vh] text-left text-[1.125rem] text-white font-gilroy bg-gray-400 shadow-[0px_4px_74px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[5.75rem] box-border gap-[18.31rem] tracking-[normal] mq700:gap-[18.31rem] mq950:flex-wrap mq975:gap-[18.31rem]">
      Error: {error}
    </div>;
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <section class="flex-1 ml-[19rem] mt-[8rem] rounded-xl bg-gray-200 flex flex-row items-start justify-start py-[2.375rem] px-[2.125rem] box-border gap-[0rem_1.375rem] min-h-[55.188rem] max-w-[calc(100%_-_300px)] text-left text-[2.375rem] text-white font-gilroy mq925:flex-wrap mq925:pt-[1.563rem] mq925:pb-[1.563rem] mq925:box-border mq925:max-w-full mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border">
      {/* <div class="h-[55.188rem] w-[67.5rem] relative rounded-xl bg-gray-200 hidden max-w-full"></div> */}
      <div class="w-full flex flex-col items-start justify-start pt-[0.438rem] px-[0rem] pb-[0rem] box-border min-w-[20.188rem] max-w-full mq925:flex-1">
        <div class="self-stretch flex flex-col items-start justify-start gap-[1.375rem_0rem] max-w-full">
          <div class="self-stretch flex flex-col items-start justify-start gap-[1.938rem_0rem] max-w-full mq450:gap-[1.938rem_0rem]">
            <div className="w-full d-flex">
              <h1 class="m-0 h-[2rem] relative text-inherit leading-[2.375rem] capitalize font-semibold font-inherit inline-block shrink-0 z-[1] mq925:text-[1.875rem] mq925:leading-[1.875rem] mq450:text-[1.438rem] mq450:leading-[1.438rem]">
                content
              </h1>{" "}
              <div class="flex-1 flex flex-col items-end justify-start gap-[1.438rem_0rem] min-w-[27.125rem] max-w-full text-[1.375rem] mq700:min-w-full">
                <div class="flex flex-row items-start justify-start gap-[0rem_1.125rem] max-w-full text-[1.125rem] mq700:flex-wrap">
                  <div class="rounded-3xs flex flex-row items-center justify-start py-[1.063rem] pr-[1.188rem] pl-[1.063rem] gap-[1.125rem] z-[1] border-[0.6px] border-solid border-white">
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
                      class="h-[0.25rem] w-[0.5rem] relative z-[1]"
                      loading="lazy"
                      alt=""
                      src={vector12}
                    />
                  </div>
                  <button class="cursor-pointer [border:none] pt-[1rem] px-[2rem] pb-[0.938rem] bg-white rounded-3xs flex flex-row items-end justify-start gap-[0rem_0.5rem] z-[1] hover:bg-gainsboro-100">
                    <div class="h-[2.875rem] w-[8.813rem] relative rounded-3xs bg-white hidden"></div>
                    <img
                      class="h-[0.938rem] w-[0.813rem] relative min-h-[0.938rem] z-[2]"
                      alt=""
                      src={group51}
                    />

                    <div class="relative text-[1.125rem] leading-[0.75rem] capitalize font-gilroy text-gray-200 text-center z-[2]">
                      delete
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-3 gap-4">
                  {media.map((item, index) => (
                    <div
                      key={item.id}
                      class="self-stretch rounded-sm bg-gray-100 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-start pt-[0.625rem] px-[0.563rem] pb-[1.313rem] box-border gap-[1.125rem_0rem] max-w-full z-[1] text-[1.375rem]"
                    >
                      <div class="self-stretch rounded-3xs flex flex-col items-start justify-start p-[0.5rem] gap-[7.25rem_0rem] bg-cover bg-no-repeat bg-[top] z-[2] relative">
                        <img
                          class="w-[16.5rem] h-[12.375rem] relative rounded-3xs object-cover alt-pt-5 z-[0]"
                          // src={item.imageUrl}
                          src={item.url}
                          alt={item.caption}
                        />
                        <div class="form-check absolute top-0 left-0 ml-[1rem] mt-[0.6rem]">
                          <input
                            class="form-check-input w-[1.875rem] h-[1.875rem]"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                        </div>

                        <button onClick={handleDeleteMedia(item.id)} class="cursor-pointer [border:none] pt-[0.688rem] m-[1rem]  pb-[0.75rem] pr-[1.125rem] pl-[1.188rem] bg-gray-700 rounded-md [backdrop-filter:blur(20px)] flex flex-row items-center justify-center z-[3] hover:bg-gainsboro-200 absolute bottom-0 left-0 m-[0.5rem]">
                          <div class="relative text-[1rem]  leading-[1rem] capitalize font-gilroy text-white text-center z-[4]">
                            {item.entityType}{" "}
                          </div>
                        </button>
                      </div>
                      <div class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.313rem] pl-[0rem]">
                        <div class="flex-1 flex  flex-row items-end justify-between gap-[1.25rem]">
                          <h3 class="m-0 relative text-inherit pl-2 leading-[1.125rem] capitalize font-medium font-inherit z-[2] mq450:text-[1.125rem] mq450:leading-[1.125rem]">
                            {item.tags}

                          </h3>
                          <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                            <div className="relative">
                              <IconButton
                                aria-label="more"
                                aria-controls="dropdown-menu"
                                aria-haspopup="true"
                                onClick={(event) => handleClick(event, item.id)} // Pass content ID to handleClick function
                                >
                                <img
                                  className="w-[1.438rem] h-[0.313rem] relative z-[2]"
                                  loading="lazy"
                                  alt=""
                                  src={group9}
                                />
                              </IconButton>
                              <Menu
                                id="dropdown-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                getContentAnchorEl={null}
                                PaperProps={{
                                  style: {
                                    backgroundColor: "gray",
                                    color: "#ffffff", // Text color set to white
                                    position: "absolute",
                                    left: "0",
                                    // height:"8rem",
                                    marginTop: "0rem",
                                    marginLeft: "-6rem",
                                  },
                                }}
                              >
                                <MenuItem
                                  className="hover:bg-gray-600"
                                  onClick={handleClose}
                                >
                                  <div className="flex flex-row items-start justify-start p-[0rem] pr-[1.625rem] pl-[0.688rem]">
                                    <div className="flex flex-row items-start justify-start gap-[0rem_0.5rem]">
                                      <img
                                        className="h-[0.75rem] w-[0.875rem] relative min-h-[0.75rem] z-[4]"
                                        loading="lazy"
                                        alt=""
                                        src={EditHide}
                                      />
                                      <div className="relative leading-[0.75rem] capitalize z-[4]">
                                        hide
                                      </div>
                                    </div>
                                  </div>
                                </MenuItem>

                                <MenuItem
                                  className="hover:bg-gray-600"
                                  onClick={handleDeleteMedia} // Call handleDeleteMedia when delete option is clicked

                                >
                                  <div className="flex flex-row items-start justify-start p-[0rem] pr-[1.125rem] pl-[0.688rem] text-left">
                                    <div className="flex flex-row items-center justify-start gap-[0rem_0.563rem]">
                                      <img
                                        className="h-[0.938rem] w-[0.813rem] relative z-[4]"
                                        loading="lazy"
                                        alt=""
                                        src={group5}
                                      />
                                      <div className="relative leading-[0.75rem] capitalize z-[4]">
                                        delete
                                      </div>
                                    </div>
                                  </div>
                                </MenuItem>
                              </Menu>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="self-stretch h-[2.375rem] flex flex-row items-start justify-start text-[1rem]">
                        <div class="self-stretch w-[16.313rem] pl-2 relative leading-[1.375rem] capitalize inline-block shrink-0 z-[2]">
                          {item.caption}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
