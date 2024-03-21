import React, { useState } from "react";
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
  const [anchorEl, setAnchorEl] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <section class="flex-1 rounded-xl bg-gray-200 flex flex-row items-start justify-start py-[2.375rem] px-[2.125rem] box-border gap-[0rem_1.375rem] min-h-[55.188rem] max-w-[calc(100%_-_300px)] text-left text-[2.375rem] text-white font-gilroy mq925:flex-wrap mq925:pt-[1.563rem] mq925:pb-[1.563rem] mq925:box-border mq925:max-w-full mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border">
      {/* <div class="h-[55.188rem] w-[67.5rem] relative rounded-xl bg-gray-200 hidden max-w-full"></div> */}
      <div class="w-[20.188rem] flex flex-col items-start justify-start pt-[0.438rem] px-[0rem] pb-[0rem] box-border min-w-[20.188rem] max-w-full mq925:flex-1">
        <div class="self-stretch flex flex-col items-start justify-start gap-[1.375rem_0rem] max-w-full">
          <div class="self-stretch flex flex-col items-start justify-start gap-[1.938rem_0rem] max-w-full mq450:gap-[1.938rem_0rem]">
            <h1 class="m-0 h-[2rem] relative text-inherit leading-[2.375rem] capitalize font-semibold font-inherit inline-block shrink-0 z-[1] mq925:text-[1.875rem] mq925:leading-[1.875rem] mq450:text-[1.438rem] mq450:leading-[1.438rem]">
              content
            </h1>
            <div className=" d-flex grid gap-4 ">
              <div class="self-stretch rounded-sm bg-gray-100 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-start pt-[0.625rem] px-[0.563rem] pb-[1.438rem] box-border gap-[1.125rem_0rem] max-w-full z-[1] text-[1.375rem]">
                {/* <div class="w-[20.188rem] h-[20.063rem] relative rounded-sm bg-gray-100 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] hidden max-w-full"></div> */}
                <div class="self-stretch rounded-3xs flex flex-col items-start justify-start p-[0.5rem] gap-[7.25rem_0rem] bg-cover bg-no-repeat bg-[top] z-[2] relative">
                  <img
                    class="w-[18.0rem] h-[12.375rem] relative rounded-3xs object-cover z-[0]"
                    alt=""
                    src={rectangle}
                  />

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
                      GIF
                    </div>
                  </button>
                </div>

                <div class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.313rem] pl-[0rem]">
                  <div class="flex-1 flex flex-row items-start justify-center gap-[0rem_0.625rem] mq450:flex-wrap">
                    <h3 class="m-0 h-[1.125rem] relative text-inherit leading-[1.375rem] capitalize font-medium font-inherit inline-block z-[2] mq450:text-[1.125rem] mq450:leading-[1.125rem]">
                      Lorem ipsum dolor
                    </h3>
                    <div class="w-[6.313rem] flex flex-col items-start justify-start pt-[0.563rem] px-[0rem] pb-[0rem] box-border text-[1rem]">
                      <div class="self-stretch flex flex-col text-white items-end justify-start gap-[0.125rem_0rem]">
                        <div className="relative">
                          {/* <Example/> */}
                          {/* <IconButton
                            aria-label="more"
                            aria-controls="dropdown-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
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
                                backgroundColor: "rgba(255, 255, 255, 0.3)",
                                color: "#ffffff", // Text color set to white
                                position: "absolute",
                                left: "0",
                                height:"8rem",
                                marginTop: "0rem",
                                marginLeft: "-6rem",
                              },
                            }}
                          >
                            <MenuItem
                              className="hover:bg-gray-600"
                              onClick={handleClose}
                            >
                              <div className="flex flex-row items-start bg-gray-700 justify-start p-[0rem] pr-[1.625rem] pl-[0.688rem]">
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
                              onClick={handleClose}
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
                          </Menu> */}
                        </div>
                        <div class="self-stretch flex flex-row items-start justify-start relative">
                          <div class="h-[2.375rem] w-[16.313rem] absolute !m-[0] bottom-[-0.125rem] left-[-11.80rem] leading-[1.375rem] capitalize inline-block z-[2]">
                            venenatis sagittis nisl ipsum id velit vitae euismod
                          </div>
                          <div class="flex-1 rounded-md bg-gray-700 [backdrop-filter:blur(20px)] flex flex-col items-center justify-start p-[0.5rem] gap-[0.375rem_0rem] z-[3] text-center text-[0.75rem]">
                            {/* <div class="w-[6.313rem] h-[3.5rem] relative rounded-md bg-gray-700 [backdrop-filter:blur(20px)] hidden"></div> */}
                            <div class="flex flex-row items-start justify-start py-[0rem] pr-[1.625rem] pl-[0.688rem]">
                              <div class="flex flex-row items-start justify-start gap-[0rem_0.5rem]">
                                <img
                                  class="h-[0.75rem] w-[0.875rem] relative min-h-[0.75rem] z-[4]"
                                  loading="lazy"
                                  alt=""
                                  src={EditHide}
                                />

                                <div class="relative leading-[0.75rem] capitalize z-[4]">
                                  hide
                                </div>
                              </div>
                            </div>
                            <div class="self-stretch h-[0rem] relative box-border z-[4] border-t-[0.4px] border-solid border-gray-100"></div>
                            <div class="flex flex-row items-start justify-start py-[0rem] pr-[1.125rem] pl-[0.688rem] text-left">
                              <div class="flex flex-row items-center justify-start gap-[0rem_0.563rem]">
                                <img
                                  class="h-[0.938rem] w-[0.813rem] relative z-[4]"
                                  loading="lazy"
                                  alt=""
                                  src={group5}
                                />

                                <div class="relative leading-[0.75rem] capitalize z-[4]">
                                  delete
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="self-stretch rounded-sm bg-gray-100 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-start pt-[0.625rem] px-[0.563rem] pb-[1.313rem] box-border gap-[1.125rem_0rem] max-w-full z-[1] text-[1.375rem]">
                <div class="self-stretch rounded-3xs flex flex-col items-start justify-start p-[0.5rem] gap-[7.25rem_0rem] bg-cover bg-no-repeat bg-[top] z-[2] relative">
                  <img
                    class="w-[18.0rem] h-[12.375rem] relative rounded-3xs object-cover z-[0]"
                    alt=""
                    src={rectangle}
                  />

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
                      GIF
                    </div>
                  </button>
                </div>
                <div class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.313rem] pl-[0rem]">
                  <div class="flex-1 flex flex-row items-end justify-between gap-[1.25rem]">
                    <h3 class="m-0 relative text-inherit leading-[1.125rem] capitalize font-medium font-inherit z-[2] mq450:text-[1.125rem] mq450:leading-[1.125rem]">
                      Lorem ipsum dolor
                    </h3>
                    <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
                      <div className="relative">
                        <IconButton
                          aria-label="more"
                          aria-controls="dropdown-menu"
                          aria-haspopup="true"
                          onClick={handleClick}
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
                            onClick={handleClose}
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
                  <div class="self-stretch w-[16.313rem] relative leading-[1.375rem] capitalize inline-block shrink-0 z-[2]">
                    venenatis sagittis nisl ipsum id velit vitae euismod
                  </div>
                </div>
              </div>
              <div class="self-stretch rounded-sm bg-gray-100 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-start pt-[0.625rem] px-[0.563rem] pb-[1.313rem] box-border gap-[1.125rem_0rem] max-w-full z-[1] text-[1.375rem]">
                <div class="self-stretch rounded-3xs flex flex-col items-start justify-start p-[0.5rem] gap-[7.25rem_0rem] bg-cover bg-no-repeat bg-[top] z-[2] relative">
                  <img
                    class="w-[18.0rem] h-[12.375rem] relative rounded-3xs object-cover z-[0]"
                    alt=""
                    src={rectangle}
                  />

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
                      GIF
                    </div>
                  </button>
                </div>
                <div class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.313rem] pl-[0rem]">
                  <div class="flex-1 flex flex-row items-end justify-between gap-[1.25rem]">
                    <h3 class="m-0 relative text-inherit leading-[1.125rem] capitalize font-medium font-inherit z-[2] mq450:text-[1.125rem] mq450:leading-[1.125rem]">
                      Lorem ipsum dolor
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
                    venenatis sagittis nisl ipsum id velit vitae euismod
                  </div>
                </div>
              </div>
            </div>
            <div className=" d-flex grid gap-4 ">
              <div class="self-stretch rounded-sm bg-gray-100 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-start pt-[0.625rem] px-[0.563rem] pb-[1.438rem] box-border gap-[1.125rem_0rem] max-w-full z-[1] text-[1.375rem]">
                {/* <div class="w-[20.188rem] h-[20.063rem] relative rounded-sm bg-gray-100 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] hidden max-w-full"></div> */}
                <div class="self-stretch rounded-3xs flex flex-col items-start justify-start p-[0.5rem] gap-[7.25rem_0rem] bg-cover bg-no-repeat bg-[top] z-[2] relative">
                  <img
                    class="w-[18.0rem] h-[12.375rem] relative rounded-3xs object-cover z-[0]"
                    alt=""
                    src={rectangle}
                  />

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
                      GIF
                    </div>
                  </button>
                </div>

                <div class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.313rem] pl-[0rem]">
                  <div class="flex-1 flex flex-row items-start justify-center gap-[0rem_0.625rem] mq450:flex-wrap">
                    <h3 class="m-0 h-[1.125rem] relative text-inherit leading-[1.375rem] capitalize font-medium font-inherit inline-block z-[2] mq450:text-[1.125rem] mq450:leading-[1.125rem]">
                      Lorem ipsum dolor
                    </h3>
                    <div class="w-[6.313rem] flex flex-col items-start justify-start pt-[0.563rem] px-[0rem] pb-[0rem] box-border text-[1rem]">
                      <div class="self-stretch flex flex-col items-end justify-start gap-[0.125rem_0rem]">
                        <img
                          class="w-[1.438rem] h-[0.313rem] relative z-[2]"
                          loading="lazy"
                          alt=""
                          src={group9}
                        />

                        <div class="self-stretch flex flex-row items-start justify-start relative">
                          <div class="h-[2.375rem] w-[16.313rem] absolute !m-[0] bottom-[-0.125rem] left-[-11.80rem] leading-[1.375rem] capitalize inline-block z-[2]">
                            venenatis sagittis nisl ipsum id velit vitae euismod
                          </div>
                          <div class="flex-1 rounded-md bg-gray-700 [backdrop-filter:blur(20px)] flex flex-col items-center justify-start p-[0.5rem] gap-[0.375rem_0rem] z-[3] text-center text-[0.75rem]">
                            <div class="w-[6.313rem] h-[3.5rem] relative rounded-md bg-gray-700 [backdrop-filter:blur(20px)] hidden"></div>
                            <div class="flex flex-row items-start justify-start py-[0rem] pr-[1.625rem] pl-[0.688rem]">
                              <div class="flex flex-row items-start justify-start gap-[0rem_0.5rem]">
                                <img
                                  class="h-[0.75rem] w-[0.875rem] relative min-h-[0.75rem] z-[4]"
                                  loading="lazy"
                                  alt=""
                                  src={EditHide}
                                />

                                <div class="relative leading-[0.75rem] capitalize z-[4]">
                                  hide
                                </div>
                              </div>
                            </div>
                            <div class="self-stretch h-[0rem] relative box-border z-[4] border-t-[0.4px] border-solid border-gray-100"></div>
                            <div class="flex flex-row items-start justify-start py-[0rem] pr-[1.125rem] pl-[0.688rem] text-left">
                              <div class="flex flex-row items-center justify-start gap-[0rem_0.563rem]">
                                <img
                                  class="h-[0.938rem] w-[0.813rem] relative z-[4]"
                                  loading="lazy"
                                  alt=""
                                  src={group5}
                                />

                                <div class="relative leading-[0.75rem] capitalize z-[4]">
                                  delete
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="self-stretch rounded-sm bg-gray-100 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-start pt-[0.625rem] px-[0.563rem] pb-[1.313rem] box-border gap-[1.125rem_0rem] max-w-full z-[1] text-[1.375rem]">
                <div class="self-stretch rounded-3xs flex flex-col items-start justify-start p-[0.5rem] gap-[7.25rem_0rem] bg-cover bg-no-repeat bg-[top] z-[2] relative">
                  <img
                    class="w-[18.0rem] h-[12.375rem] relative rounded-3xs object-cover z-[0]"
                    alt=""
                    src={rectangle}
                  />

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
                      GIF
                    </div>
                  </button>
                </div>
                <div class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.313rem] pl-[0rem]">
                  <div class="flex-1 flex flex-row items-end justify-between gap-[1.25rem]">
                    <h3 class="m-0 relative text-inherit leading-[1.125rem] capitalize font-medium font-inherit z-[2] mq450:text-[1.125rem] mq450:leading-[1.125rem]">
                      Lorem ipsum dolor
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
                    venenatis sagittis nisl ipsum id velit vitae euismod
                  </div>
                </div>
              </div>
              <div class="self-stretch rounded-sm bg-gray-100 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-start pt-[0.625rem] px-[0.563rem] pb-[1.313rem] box-border gap-[1.125rem_0rem] max-w-full z-[1] text-[1.375rem]">
                <div class="self-stretch rounded-3xs flex flex-col items-start justify-start p-[0.5rem] gap-[7.25rem_0rem] bg-cover bg-no-repeat bg-[top] z-[2] relative">
                  <img
                    class="w-[18.0rem] h-[12.375rem] relative rounded-3xs object-cover z-[0]"
                    alt=""
                    src={rectangle}
                  />

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
                      GIF
                    </div>
                  </button>
                </div>
                <div class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.313rem] pl-[0rem]">
                  <div class="flex-1 flex flex-row items-end justify-between gap-[1.25rem]">
                    <h3 class="m-0 relative text-inherit leading-[1.125rem] capitalize font-medium font-inherit z-[2] mq450:text-[1.125rem] mq450:leading-[1.125rem]">
                      Lorem ipsum dolor
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
                    venenatis sagittis nisl ipsum id velit vitae euismod
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </section>
  );
};

export default Content;
