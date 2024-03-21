import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Import your component-specific CSS file
import logo from "../../assets/image-4-2-1@2x.png";
import google from "../../assets/google.png";
import twitter from "../../assets/twitter.png";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:4400/api/auth/loginAdmin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid email or password");
      }

      const data = await response.json();
      const { accessToken, user } = data;

      // Store the access token in local storage
      localStorage.setItem('accessToken', accessToken);
  
      // Store the user details in local storage
      localStorage.setItem('user', JSON.stringify(user));

      // Set the token in state
      setToken(accessToken);

      console.log("Token:", accessToken); // Log the token
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };
  return (
    <div>
      <div class="w-full relative px-[450px] pt-[50px] pb-[50px] h-[100vh] text-left text-[1.125rem] text-white font-gilroy bg-gray-400 shadow-[0px_4px_74px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[5.75rem] box-border gap-[18.31rem] tracking-[normal] mq700:gap-[18.31rem] mq950:flex-wrap mq975:gap-[18.31rem]">
        <form
          onSubmit={handleSubmit}
          class="m-0 w-1/4 self-stretch flex-1 rounded-3xl bg-gray-200 flex flex-col items-center justify-start mt-10 pt-[1.75rem] pb-[2.13rem] pr-[2.94rem] pl-[3rem] box-border gap-[1.5rem] max-w-full z-[2] mq700:pl-[1.5rem] mq700:pr-[1.44rem] mq700:box-border mq950:pt-[1.25rem] mq950:pb-[1.38rem] mq950:box-border"
        >
          <div class="self-stretch flex flex-col items-center justify-start gap-[0.31rem]">
            <img
              class="w-[12.15rem] h-[2.94rem] relative z-[3]"
              loading="eager"
              alt=""
              src={logo}
            />

            <h1 class="m-0 flex-1 relative  text-inherit leading-[2.375rem] capitalize font-semibold font-inherit flex items-center z-[1] mq925:text-[1.875rem] mq925:leading-[1.875rem] mq450:text-[1.438rem] mq450:leading-[1.438rem]">
              Login
            </h1>

            <div class="self-stretch flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[1.19rem] relative gap-[0.44rem] z-[3]">
              <div class="h-[0.75rem] relative leading-[1.125rem] capitalize flex items-center shrink-0 z-[1]">
                username
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                class="w-full [border:none] [outline:none] bg-gray-500 self-stretch h-[3rem] rounded-3xs flex flex-row items-start justify-start py-[1.313rem] px-[1.125rem] box-border font-gilroy font-light text-[1.125rem] text-gray-400 min-w-[15.625rem] z-[1]"
                placeholder="julie"
              />
            </div>
            <div class="self-stretch flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0.19rem] relative gap-[0.44rem] z-[3]">
              <div class="h-[0.75rem] relative leading-[1.125rem] capitalize flex items-center shrink-0 z-[1]">
                password
              </div>
              <input
                class="w-full [border:none] [outline:none] bg-gray-500 self-stretch h-[3rem] rounded-3xs flex flex-row items-start justify-start py-[1.313rem] px-[1.125rem] box-border font-gilroy font-light text-[1.125rem] text-gray-800 min-w-[15.625rem] z-[1]"
                placeholder="julie"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div class="self-stretch flex-1 flex flex-col items-start justify-start max-w-full">
            {/* <button class="cursor-pointer [border:none] p-[0.31rem] bg-orange self-stretch rounded-lg flex flex-row items-center justify-center box-border max-w-full whitespace-nowrap z-[3] hover:bg-chocolate"> */}
            <button
              type="submit"
              className="no-underline cursor-pointer [border:none] p-[0.31rem] my-4 bg-white self-stretch  rounded-lg flex flex-row items-center justify-center box-border max-w-full whitespace-nowrap z-[3] hover:bg-chocolate"
            >
              <div class="relative text-[1.25rem] leading-[2.5rem] text-gray-200 capitalize font-semibold font-poppins  text-left z-[4]">
                Sign In
              </div>
            </button>
            {/* </button> */}
            <div class="self-stretch flex-1 flex flex-col items-start justify-start max-w-full">
              <div class="self-stretch flex flex-row items-end justify-center pt-[1.81rem] px-[0rem] pb-[0.19rem] box-border max-w-full z-[4]">
                <button class="cursor-pointer py-[0.88rem] pr-[1.25rem] pl-[2rem] flex-1 rounded-lg box-border flex flex-row items-center justify-center gap-[0.63rem] max-w-full whitespace-nowrap border-[1px] border-solid border-darkslategray-200 hover:bg-dimgray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-300">
                  <img
                    class="h-[1.38rem] w-[1.38rem] relative object-cover min-h-[1.38rem] z-[5]"
                    alt=""
                    src={google}
                  />

                  <div class="relative text-[0.94rem] leading-[1.25rem]   font-medium  text-left z-[5]">
                    Sign In with Google
                  </div>
                </button>
              </div>
              <div class="self-stretch flex flex-row items-end justify-center pt-[1.81rem] px-[0rem] pb-[0.19rem] box-border max-w-full z-[4]">
                <button class="cursor-pointer py-[0.88rem] pr-[1.25rem] pl-[2rem] flex-1 rounded-lg box-border flex flex-row items-center justify-center gap-[0.63rem] max-w-full whitespace-nowrap border-[1px] border-solid border-darkslategray-200 hover:bg-dimgray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-300">
                  <img
                    class="h-[1.38rem] w-[1.38rem] relative object-cover min-h-[1.38rem] z-[5]"
                    alt=""
                    src={twitter}
                  />

                  <div class="relative text-[0.94rem] leading-[1.25rem]   font-medium  text-left z-[5]">
                    Sign In with Twitter
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/* <div class="flex flex-row items-start justify-start gap-[0.19rem]">
            <div class="relative text-[0.88rem] leading-[1.25rem] font-poppins text-dimgray-200 text-left z-[3]">
              Already have an Account?
            </div>
            <Link
              to="/signUp"
              class="relative text-[0.94rem] leading-[1.25rem] font-medium font-poppins text-coral text-left z-[3]"
            >
              SignUp
            </Link>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
