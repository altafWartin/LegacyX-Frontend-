import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [mediaIds, setMediaIds] = useState(null);

  const [selectedContentId, setSelectedContentId] = useState(null); // State variable to hold selected content ID
  const [checkedItems, setCheckedItems] = useState([]);
  const [reloadComponent, setReloadComponent] = useState(false); // State variable to trigger component reload

  const handleCheckboxChange = (event, id) => {
    if (event.target.checked) {
      // If checkbox is checked, add the ID to checkedItems array
      setCheckedItems([...checkedItems, id]);
    } else {
      // If checkbox is unchecked, remove the ID from checkedItems array
      setCheckedItems(checkedItems.filter((item) => item !== id));
    }
  };

  const notify = () => toast.success("This content is delete successfully!!!");

  console.log(checkedItems, "id");
  async function deleteMultipleMedia(checkedItems) {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("Access token not found in local storage");
      }
      const response = await fetch(
        "https://devv.legacyx.uk/api/delete-multiple-media",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: accessToken,
          },
          body: JSON.stringify({ checkedItems }),
        }
      );
      console.log(response, "response");
      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Log success message
        // Update reloadComponent state to trigger component reload
        setReloadComponent(!reloadComponent);
      } else {
        console.error("Failed to delete multiple media");
      }
    } catch (error) {
      console.error("An error occurred while deleting multiple media:", error);
    }
  }

  const handleClick = (event, contentId) => {
    setAnchorEl(event.currentTarget);
    setSelectedContentId(contentId); // Store the content ID of the clicked item
    console.log("contentID", contentId);
    console.log("selectd", selectedContentId);
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

    // Call the fetchMediaFeed function whenever reloadComponent changes
    fetchMediaFeed();
  }, [reloadComponent]); // Dependency array includes reloadComponent

  const handleDeleteMedia = async (mediaId) => {
    console.log(mediaId);
    try {
      const response = await fetch(
        `https://devv.legacyx.uk/api/entity/delete/${mediaId}`, // Corrected URL
        {
          method: "GET", // Use DELETE method to indicate deletion
        }
      );

      if (response.ok) {
        // If deletion is successful, update reloadComponent state to trigger component reload
        setReloadComponent(!reloadComponent);
        const data = await response.json();
        console.log(data.message); // Log success message
        notify();
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
      <ToastContainer  className="text-[1rem]"/>
      <div class="w-full flex flex-col items-start justify-start pt-[0.438rem] px-[0rem] pb-[0rem] box-border min-w-[20.188rem] max-w-full mq925:flex-1">
        <div class="self-stretch flex flex-col items-start justify-start gap-[1.375rem_0rem] max-w-full">
          <div class="self-stretch flex flex-col items-start justify-start gap-[1.938rem_0rem] max-w-full mq450:gap-[1.938rem_0rem]">
            <div className="w-full d-flex">
              <h1 class="m-0 h-[2rem] relative text-inherit leading-[2.375rem] capitalize font-semibold font-inherit inline-block shrink-0 z-[1] mq925:text-[1.875rem] mq925:leading-[1.875rem] mq450:text-[1.438rem] mq450:leading-[1.438rem]">
                content
              </h1>{" "}
              <div class="flex-1 flex flex-col items-end justify-start gap-[1.438rem_0rem] min-w-[27.125rem] max-w-full text-[1.375rem] mq700:min-w-full">
                <div class="flex flex-row items-start justify-start gap-[0rem_1.125rem] max-w-full text-[1.125rem] mq700:flex-wrap">
                  {/* <div class="rounded-3xs flex flex-row items-center justify-start py-[1.063rem] pr-[1.188rem] pl-[1.063rem] gap-[1.125rem] z-[1] border-[0.6px] border-solid border-white"> */}
                    {/* <div class="h-[2.875rem] w-[12.438rem] relative rounded-3xs box-border hidden border-[0.6px] border-solid border-white"></div> */}
                    {/* <div class="flex flex-row items-start justify-start gap-[0rem_0.813rem]"> */}
                      {/* <div class="relative leading-[0.75rem] capitalize z-[1]"> */}
                        {/* sort by : */}
                      {/* </div> */}
                      {/* <div class="relative leading-[0.75rem] capitalize z-[1]"> */}
                        {/* recent */}
                      {/* </div> */}
                    {/* </div> */}
                    {/* <img */}
                      {/* class="h-[0.25rem] w-[0.5rem] relative z-[1]" */}
                      {/* loading="lazy" */}
                      {/* alt="" */}
                      {/* src={vector12} */}
                    {/* /> */}
                  {/* </div> */}
                  <button
                    onClick={() => deleteMultipleMedia()}
                    class="cursor-pointer [border:none] pt-[1rem] px-[2rem] pb-[0.938rem] bg-white rounded-3xs flex flex-row items-end justify-start gap-[0rem_0.5rem] z-[1] hover:bg-gainsboro-100"
                  >
                    <img
                      class="h-[0.938rem] w-[0.813rem] relative min-h-[0.938rem] z-[2]"
                      alt=""
                      src={group51}
                    />

                    <div class="relative text-[1.125rem] border-0 bg-white leading-[0.75rem] capitalize font-gilroy text-gray-200 text-center z-[2]">
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
                        {item.entityType === "videos" ? (
                          <video
                            className="h-[12.375rem] w-full object-cover rounded-3xs"
                            loop // Add loop attribute to play video in a loop
                            autoPlay // Add autoPlay attribute to enable autoplay
                            muted // Mute the video to enable autoplay without sound
                            src={item.url} // Assuming you have a video URL in your 'media' object
                            alt={item.caption}
                          />
                        ) : (
                          <img
                            className="h-[12.375rem] w-full object-cover rounded-3xs"
                            src={item.url}
                            alt={item.caption}
                          />
                        )}

                        <div class="form-check absolute top-0 left-0 ml-[1rem] mt-[0.6rem]">
                          <input
                            class="form-check-input w-[1.875rem] h-[1.875rem]"
                            type="checkbox"
                            value=""
                            id={item.id} // Use item ID as the ID of the checkbox
                            onChange={(event) =>
                              handleCheckboxChange(event, item.id)
                            } // Pass item ID to handleCheckboxChange function
                          />
                        </div>

                        <button class="cursor-pointer [border:none] pt-[0.688rem] m-[1rem]  pb-[0.75rem] pr-[1.125rem] pl-[1.188rem] bg-gray-700 rounded-md [backdrop-filter:blur(20px)] flex flex-row items-center justify-center z-[3] hover:bg-gainsboro-200 absolute bottom-0 left-0 m-[0.5rem]">
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
                            <i
                              onClick={() => handleDeleteMedia(item.id)}
                              className="fa fa-trash mr-4"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                      <div class="self-stretch h-[2.375rem] flex flex-row items-start justify-start text-[1rem]">
                        <div class="self-stretch w-full object-cover pl-2 relative leading-[1.375rem] capitalize inline-block shrink-0 z-[2]">
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
