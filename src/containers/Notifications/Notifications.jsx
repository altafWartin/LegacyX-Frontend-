import React, { useState, useEffect, useRef } from "react";
import vector12 from "../../assets/vector-12.svg";
import group51 from "../../assets/group-5-1.svg";
import Select from "react-select";

import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const Notifications = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [notificationText, setNotificationText] = useState("");

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUsersValue, setSelectedUsersValue] = useState([]);

  console.log(selectedUsers, "selectedUsers");

  const handleSelectChange = (selectedOptions) => {
    setSelectedUsers(selectedOptions);
    const selectedValues = selectedOptions.map((option) => option.value);
    setSelectedUsersValue(selectedValues);
  };

  console.log(selectedUsersValue);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://devv.legacyx.uk/api/auth/allProfile"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json(); // Parse JSON response

        console.log(data);
        // Extracting user name and user id
        const usersWithRequiredFields = data.map((user) => ({
          value: user._id,
          label: user.username,
        }));

        setUsers(usersWithRequiredFields); // Set users state with the extracted fields
        console.log(usersWithRequiredFields);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    console.log(users, "hello ");
    fetchUsers();
  }, []);

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    // You can perform any action here based on the selected option
    // For example, you might want to trigger a function to filter notifications
  };

  // calll notification api

  const handleNotificationTextChange = (event) => {
    setNotificationText(event.target.value);
  };

  const handleNotificationSubmit = () => {
    console.log("Submitting notification...");
  console.log("Notification data:", {
    notificationType: selectedOption,
    userIds: selectedUsers.map((user) => user.value),
    notificationText: notificationText,
  });
    // Perform API call here
    fetch("https://devv.legacyx.uk/api/auth/send-notification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers required by your API
      },
      body: JSON.stringify({
        notificationType: selectedOption,
        userIds: selectedUsers.map((user) => user.value),
        notificationText: notificationText,

      }),
    })
      .then((response) => {
        // Handle response from API
        if (response.ok) {
          // Notification successfully sent
          console.log("Notification sent successfully");
        } else {
          // Notification failed
          console.error("Failed to send notification");
        }
        return response.json(); // Parse response body as JSON
      })
      .then((data) => {
        console.log("API Response:", data); // Log the parsed JSON response
        window.location.reload(false);

      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  };
   
  return (


    
    <section class="flex-1 rounded-xl w-full ml-[19rem] mt-[8rem] bg-gray-200 flex flex-col items-start justify-start pt-[2.125rem] px-[2.125rem] pb-[24.625rem] box-border gap-[0.875rem_0rem] max-w-full text-left text-[1.125rem] text-white font-gilroy mq925:pt-[1.375rem] mq925:pb-[16rem] mq925:box-border mq925:max-w-full mq450:pt-[1.25rem] mq450:pb-[10.375rem] mq450:box-border">
      <div class="flex-1 flex flex-col w-full items-end justify-start  min-w-[27.125rem] max-w-full text-[1.375rem] mq700:min-w-full">
        <div class="flex  items-start  w-full justify-between  max-w-full text-[1.125rem] mq700:flex-wrap">
          <h1 class="m-0  relative text-inherit leading-[2.375rem] text-[3rem] capitalize font-semibold font-inherit inline-block shrink-0 z-[1]  ">
            Notification
          </h1>{" "}
          <div className="flex gap-2">
            <div class="rounded-3xs flex flex-row items-center justify-start py-[1.063rem] pr-[1.188rem] pl-[1.063rem] gap-[1.125rem] z-[1] border-[0.6px] border-solid border-white">
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
            </button>{" "}
          </div>
        </div>
      </div>

      <div class="self-stretch flex flex-row mt-3 flex-wrap items-start justify-start gap-[0rem_1.5rem] max-w-full">
        <div class="flex-1 flex flex-col items-start justify-start gap-[1.5rem_0rem] min-w-[20.063rem] max-w-full">
          <div class="self-stretch flex flex-col items-start justify-start gap-[0.875rem_0rem]">
            <div class="h-[0.75rem] relative leading-[1.125rem] capitalize flex items-center shrink-0 z-[1]">
              Notification Type's
            </div>
            <select
              className="w-full [border:none] [outline:none] flex justify-between placeholder:text-black  self-stretch h-[3.375rem] px-3 rounded-3xs flex flex-row items-start justify-start py-[1rem] px-[1.125rem] box-border font-gilroy font-light text-[1.125rem] text-gray-400 min-w-[15.625rem] z-[1]"
              id="notificationType"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="">Select</option>
              <option value="Informative">Informative</option>
              <option value="Reminder">Reminder</option>
              <option value="Offer">Offer</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <div class="w-full flex-1 flex flex-col items-start justify-start gap-[1.5rem_0rem] min-w-[20.063rem] max-w-full">
          <div class="w-full self-stretch flex flex-col items-start justify-start gap-[0.875rem_0rem]">
            <div class=" w-full h-[0.75rem] relative leading-[1.125rem] capitalize flex items-center shrink-0 z-[1]">
              Select User's
            </div>
            {/* <input
              class="w-full [border:none] [outline:none] placeholder:text-black bg-gray-500 self-stretch h-[3.375rem] rounded-3xs flex flex-row items-start justify-start py-[1.313rem] px-[1.125rem] box-border font-gilroy font-light text-[1.125rem] text-gray-400 min-w-[15.625rem] z-[1]"
              placeholder="Select Users"
              type="text"
            /> */}
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              onChange={handleSelectChange}
              value={selectedUsers}
              isMulti={true}
              options={users}
              styles={{
                container: (provided) => ({
                  ...provided,
                  cursor: "pointer",
                }),
                control: (provided) => ({
                  ...provided,
                  width: "400px",
                  border: "none",
                  outline: "none",
                  backgroundColor: "white",
                  minHeight: "3.375rem",
                  maxHeight:"3.375rem",
                  borderRadius: "0.55rem",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.5rem 1rem",
                  fontFamily: "gilroy",
                  fontSize: "1.125rem",
                  color: "black",
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: "black",
                }),
                multiValue: (provided) => ({
                  ...provided,
                  backgroundColor: "#4B5563",
                  color: "#F9FAFB",
                  borderRadius: "0.25rem",
                  display: "flex",
                  alignItems: "center",
                  padding: "0.25rem 0.5rem",
                }),
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor:  "white", // Set background to transparent
                  color: state.isSelected ? "#F9FAFB" : "#9CA3AF", // Set text color based on selection
                  cursor: "pointer !important",
                  zIndex: 100,
                }),
                multiValueLabel: (provided) => ({
                  ...provided,
                  color: "#F9FAFB",
                }),
                multiValueRemove: (provided) => ({
                  ...provided,
                  cursor: "pointer",
                  color: "white",
                  ":hover": {
                    backgroundColor: "white",
                    color: "#black",
                  },
                }),
                menu: (provided) => ({
                  ...provided,
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  cursor: "pointer",
                  maxHeight: "200px", // Adjust the maximum height as needed
                  overflowY: "auto", // Enable vertical scrolling
                }),
                menuList: (provided) => ({
                  ...provided,
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  cursor:"pointer",
                  maxHeight: "200px", // Adjust the maximum height as needed
                  overflowY: "auto", // Enable vertical scrolling
                }),
              }}
            />
          </div>
        </div>
      </div>
      <div class="self-stretch flex flex-col mt-4 items-start justify-start gap-[0.875rem_0rem]">
        <div class="h-[0.75rem] relative leading-[1.125rem] capitalize flex items-center shrink-0 z-[1]">
          Notification Text
        </div>
        <textarea
          class="w-full [border:none] [outline:none] z-0  self-stretch h-[12.375rem] rounded-3xs flex flex-row items-start justify-start py-[1.313rem] px-[1.125rem] box-border font-gilroy font-light text-[1.125rem] placeholder:text-black text-gray-400 min-w-[15.625rem] z-[1]"
          placeholder="Write Somthing.."
          value={notificationText}
          onChange={handleNotificationTextChange}
          type="text"
        />
      </div>
      <button
        onClick={handleNotificationSubmit}
        class="cursor-pointer [border:none] mt-4 py-[1.063rem] pr-[2.563rem] pl-[2.625rem] bg-white rounded-3xs flex flex-row items-start justify-start z-[1] hover:bg-gainsboro-100"
      >
        <div class="h-[2.875rem] w-[8.813rem] relative rounded-3xs bg-white hidden"></div>
        <div class="relative text-[1.125rem] leading-[0.75rem] capitalize font-gilroy text-gray-200 text-left z-[2]">
          submit
        </div>
      </button>
    </section>
  );
};

export default Notifications;
