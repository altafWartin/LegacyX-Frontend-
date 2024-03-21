import React, { useState } from "react";

import image1 from "../../assets/image-4-2-1@2x.png";
import group from "../../assets/group.svg";
import ellipse from "../../assets/ellipse-1@2x.png";
import { useNavigate } from "react-router-dom";

import { IconButton, Menu, MenuItem } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    // Clear local storage
    localStorage.clear();
    // Navigate to /login
    navigate("/login");
  };

  return (
    <header class="self-stretch w-full flex flex-row items-start justify-start py-[0rem] pr-[0.688rem] pl-[0rem] box-border max-w-full shrink-0">
      <div class="flex-1 rounded-xl bg-gray-200 flex flex-row items-center justify-between py-[0.688rem] pr-[0.688rem] pl-[1.375rem] box-border max-w-full gap-[1.25rem]">
        <div class="h-[4.625rem] w-[85.625rem] relative rounded-xl bg-gray-200 hidden max-w-full"></div>
        <img
          class="h-[2.75rem] w-[7.063rem] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src={image1}
        />

        <div class="flex flex-row items-center justify-start gap-[0rem_1.875rem]">
          <img
            class="h-[1.625rem] w-[1.5rem] relative z-[1]"
            loading="lazy"
            alt=""
            src={group}
          />

          {/* <img
                  class="h-[3.25rem] w-[3.25rem] relative rounded-[50%] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src={ellipse}
                /> */}

          <div>
            <IconButton
              aria-controls="profile-menu"
              aria-haspopup="true"
              onClick={handleOpenMenu}
            >
              <img
                class="h-[3.25rem] w-[3.25rem] relative rounded-[50%] object-cover z-[1]"
                loading="lazy"
                alt=""
                src={ellipse}
              />
              {/* <AccountCircleIcon /> */}
            </IconButton>
            <Menu
              id="profile-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
              <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
