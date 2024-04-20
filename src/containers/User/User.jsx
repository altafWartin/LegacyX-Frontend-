import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ellipse from "../../assets/ellipse-2@2x.png";
import group42a from "../../assets/group-4@2x.png";
import vector12 from "../../assets/vector-12.svg";
import star from "../../assets/star.svg";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Link, useNavigate } from "react-router-dom"; // Importing useNavigate hook
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  radios: "10px",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "gray",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const User = () => {
  const [open, setOpen] = React.useState(false);
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate(); // Initializing the useNavigate hook

  const notify = () => toast.success("User delete successfully!!!");
  const block = () => toast.success("User Blocked Successfully!!!");
  const Subscribed = () => toast.success("User Subscribed Successfully!!!");
  const handleOpen = (userId) => {
    setOpen(true);
    setUserId(userId); // Set the userId in state when opening the modal
    console.log(userId);
  };

  const handleClose = () => setOpen(false);


  const fetchData = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("Access token not found in local storage");
      }

      const response = await fetch(
        "https://devv.legacyx.uk/api/auth/allProfile",
        {
          headers: {
            authorization: `${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user profiles");
      }

      const data = await response.json();
      setProfiles(data);
      console.log(data);
      console.log(data.length); // Log the length of the array
    } catch (error) {
      console.error("Error fetching user profiles:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Initial data fetch
  }, [fetchData]);

  const subscribUserProfile = async (userId) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("Access token not found in local storage");
      }
      console.log("hello ",userId)

      const response = await fetch(
        "https://devv.legacyx.uk/api/auth/subscriptionByAdmin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `${accessToken}`,
          },
          body: JSON.stringify({ userId }),
        }
      );

      console.log(data,"data")

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        notify();
        Subscribed(); 
        setErrorMessage("");

        fetchData(); // Fetch updated user list after deletion
      } else {
        setMessage("");
        setErrorMessage(data.message || "An error occurred");
      }
    } catch (error) {
      setMessage("");
      setErrorMessage("Network error occurred");
    }
  };

  const deleteUserProfile = async (userId) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("Access token not found in local storage");
      }

      const response = await fetch(
        "https://devv.legacyx.uk/api/auth/deleteUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `${accessToken}`,
          },
          body: JSON.stringify({ userId }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        notify();
        setErrorMessage("");

        fetchData(); // Fetch updated user list after deletion
      } else {
        setMessage("");
        setErrorMessage(data.message || "An error occurred");
      }
    } catch (error) {
      setMessage("");
      setErrorMessage("Network error occurred");
    }
  };

 
  const blockUserProfile = async (userId) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("Access token not found in local storage");
      }

      const response = await fetch("https://devv.legacyx.uk/api/auth/blockUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `${accessToken}`,
        },
        body: JSON.stringify({ userId }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        block();
        setErrorMessage("");

        fetchData(); // Fetch updated user list after deletion
      } else {
        setMessage("");
        setErrorMessage(data.message || "An error occurred");
      }
    } catch (error) {
      setMessage("");
      setErrorMessage("Network error occurred");
    }
  };


  const fetchSingleProfile = async (userId) => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      const response = await fetch(
        `https://devv.legacyx.uk/api/auth/singleProfile/${userId}`,
        {
          headers: {
            authorization: accessToken,
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
    <div class="flex-1 h-[100vh] rounded-xl  ml-[19rem] mt-[8rem] text-white bg-gray-200  flex flex-col items-center justify-start pt-[2.375rem] px-[2.125rem] pb-[5.125rem] box-border gap-[1.375rem_0rem] max-w-[calc(100%_-_300px)] mq900:pt-[1.563rem] mq900:pb-[3.313rem] mq900:box-border mq900:max-w-full mq450:pt-[1.25rem] mq450:pb-[2.125rem] mq450:box-border">
      <ToastContainer className="text-[1rem]" />

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Action
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div className="d-flex justify-end gap-3">
                <button
                  onClick={() => {
                    blockUserProfile(userId);
                    handleClose(); // Close the modal after deleting
                  }}
                  className="px-4 border-0"
                >
                  Block
                </button>{" "}
                <button
                  onClick={() => {
                    subscribUserProfile(userId);
                    handleClose(); // Close the modal after deleting
                  }}
                  className="px-4 border-0"
                >
                  Subscribe
                </button>{" "}
                <button
                  onClick={() => {
                    deleteUserProfile(userId);
                    handleClose(); // Close the modal after deleting
                  }}
                  className="px-4 border-0"
                >
                  Delete
                </button>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
      <div class="w-full flex flex-row items-center justify-between pt-[0rem] px-[0rem] pb-[0.188rem] box-border gap-[1.25rem] text-[2.375rem]">
        <h1 class="m-0 h-[2rem] relative text-inherit leading-[2.375rem] capitalize font-semibold font-inherit inline-block z-[1] mq900:text-[1.875rem] mq900:leading-[1.875rem] mq450:text-[1.438rem] mq450:leading-[1.438rem]">
          users
        </h1>
        <div className="d-flex gap-4">
          <div class="rounded-3xs flex flex-row items-center justify-start py-[1.063rem] pr-[1.188rem] pl-[1.063rem] gap-[1.125rem] z-[1] text-[1.125rem] border-[0.6px] border-solid border-white">
            <div class="flex flex-row items-start justify-start gap-[0rem_0.813rem]">
              <div class="relative leading-[0.75rem] capitalize z-[1]">
                Users :
              </div>
              <div class="relative leading-[0.75rem] capitalize z-[1]">
                {profiles.length}
              </div>
            </div>
          </div>
          <div class="rounded-3xs flex flex-row items-center justify-start py-[1.063rem] pr-[1.188rem] pl-[1.063rem] gap-[1.125rem] z-[1] text-[1.125rem] border-[0.6px] border-solid border-white">
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
          </div>{" "}
        </div>
      </div>
      <div className="h-[500px] w-full overflow-y-auto ">
        {profiles.map((profile) => (
          <div
            key={profile._id}
            className="w-full rounded-sm bg-gray-100 mb-3 no-underline text-white cursor-pointer shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] flex flex-row items-center justify-between py-[0.875rem] pr-[1.938rem] pl-[0.875rem] box-border gap-[1.25rem] z-[1]"
          >
            <div>
              <div
                onClick={() => fetchSingleProfile(profile._id)}
                className="flex flex-row items-center justify-start gap-[0rem_1.813rem]"
              >
                <Stack direction="row" spacing={2}>
                  <Avatar
                    src={profile.profileImage}
                    alt={profile.username}
                    sx={{ width: 56, height: 56 }}
                  />
                </Stack>

                <div className="h-[0.75rem]  relative leading-[1.125rem] capitalize flex items-center z-[2]">
                  {profile.username}    {profile.isSubscribed && (
                    <img
                      className="ml-2 relative object-contain z-[2]"
                      loading="lazy"
                      alt=""
                      src={star}
                    />

                  )}
                </div>
              </div>
            </div>
            <div className="flex w-1/2 items-center justify-between">
              <div className="flex flex-col items-start justify-end py-[0rem] pr-[0.25rem] pl-[0rem]">
                <div className="h-[0.75rem] relative leading-[1.125rem] capitalize flex items-center shrink-0 whitespace-nowrap z-[2]">
                  {profile.email}
                </div>
              </div>
              <div onClick={() => handleOpen(profile._id)}>
                <img
                  className="h-[1.625rem] w-[0.375rem] relative object-contain z-[2]"
                  loading="lazy"
                  alt=""
                  src={group42a}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
