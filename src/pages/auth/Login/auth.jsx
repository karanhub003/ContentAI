import React, { useState } from "react";
import logoImg from "../../../assets/New folder/logoImage.png";
import heroImg from "../../../assets/Auth Page/heroImg.webp";
import googleImg from "../../../assets/Auth Page/google.png";
import microsoftImg from "../../../assets/Auth Page/microsoft.png";
import appleImg from "../../../assets/Auth Page/apple.png";
import bundle from "../../../assets/Auth Page/bundle.webp";

import { features } from "../../../data/features";

export default function Auth() {
  const [isTicked, setIsTicked] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const tickedToggler = () => {
    setIsTicked(!isTicked);
  };

  const signUp=()=>{
    setIsSignUp(!isSignUp)
  }

  return (
    <div className="LoginMainContainer  min-h-screen flex justify-center items-center    ">
      <div
        className="contentMainContainer border  border-[#1E293B]  rounded-lg max-w-[1600px]  px-4 py-6 grid grid-cols-[1.25fr_1fr] justify-between bg-cover bg-left bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="leftSideContainer   flex flex-col justify-between py-5 px-8">
          <div className="topSideContainer flex flex-col gap-8">
            {" "}
            <div className="logoBox  flex items-center font-bold gap-2">
              <img className="w-10" src={logoImg} alt="logoImg" />
              <h2 className="text-[18px]">
                ContentPilot <span className="text-[#7C3AED]">Ai</span>
              </h2>
            </div>
            <div className="subHeadingContainer flex flex-col gap-2">
              <h2 className="text-3xl font-semibold">
                Create. Plan. Publish.
                <h2>
                  Grow with <span className="text-[#7C3AED]">Al</span>.
                </h2>
              </h2>
              <p className="text-[14px] font-medium text-[#94A3B8]">
                Your all-in-one Al content platform to ideate,
                <p>
                  create, schedule, and analyze content that drives results.
                </p>
              </p>
            </div>
          </div>
          <div className="w-160">
            <img className="w-full" src={bundle} alt="bundle" />
          </div>
          <div className="bottomContainer py-2.5 flex flex-col gap-8 ">
            <div className="featuresBoxWrapper flex  justify-between ">
              {features.map((feature) => (
                <>
                  <div className="featureBox  flex flex-col items-center p-2 gap-1.5 ">
                    <div className="divImg">
                      <i
                        className={`fa-solid ${feature.icon} text-3xl text-[#7C3AED]`}
                      ></i>
                    </div>
                    <h3 className="text-[14px] font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-center text-[12px] font-medium text-[#94A3B8]">
                      {feature.description}
                    </p>
                  </div>
                  {feature.id === 4 ? (
                    <div className=""></div>
                  ) : (
                    <div className="w-0.5  bg-[#1E293B]"></div>
                  )}
                </>
              ))}
            </div>
            <div className="quoteWrapper flex  gap-2.5 pl-4">
              <div className="quoteImgBox w-6 h-6  flex items-center justify-center rounded-full bg-purple-800">
                <i className="fa-solid fa-quote-left text-[16px]  text-purple-400"></i>
              </div>
              <div className="infoWrapper flex flex-col gap-2">
                <p className="text-[14px] text-[#94A3B8]">
                  ContentPilot Al transformed the way we create and manage
                  content.
                  <p>It's like having a full content team by your side."</p>
                </p>
                <p className="text-[12px] text-purple-500">
                  -Chitransh Singh, Marketing Head
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rightSideContainer  border flex flex-col   gap-5 bg-[#0D131D] border-[#1E293B] rounded-lg px-4 py-5 ">
          <div className="toggleWrapper flex justify-end ">
            <div className="toggleMode border  border-[#1E293B] flex items-center py-2 px-3.5 gap-1.5 align-right cursor-pointer rounded-xl">
              <i className="fa-regular fa-moon text-[12px]"></i>
              <p className="text-[12px] font-medium">Dark</p>
              <i className="fa-solid fa-angle-down text-[12px]"></i>
            </div>

          </div>
          <div className="innerFormContainer flex flex-col  border w-120 mx-auto  border-[#1E293B] bg-[#111927] rounded-lg gap-3.5 overflow-hidden">
            <div className="topSideContainer p-6">
              <div className="headingInfo py-3.5 flex flex-col gap-3">
                <h2 className="text-3xl font-semibold">
                  {isSignUp ? "Create your account 🚀" : "Welcome back 👋"}
                </h2>
                <p className="text-[16px] font-medium text-[#94A3B8]">
                  {isSignUp
                    ? "Sign up to get started with "
                    : "Sign in to continue to "}
                  <span className="text-purple-500">ContentPilot Al</span>
                </p>
              </div>
              <form className=" flex flex-col gap-6 py-3.5">
                {isSignUp && (
                  <div className="nameWrapperContainer flex justify-between  ">
                    <div className="firstNameField flex flex-col gap-1">
                      <label className="text-[14px]" htmlFor="name">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="name  w-50 border p-2 rounded-lg placeholder:text-[12px] outline-none border-[#1E293B]"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="lastNameField flex flex-col gap-1">
                      <label className="text-[14px]" htmlFor="lastName">
                        Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="lastName w-50 border p-2 rounded-lg placeholder:text-[12px] outline-none border-[#1E293B]"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                )}

                <div className="emailBox  flex flex-col gap-1.5">
                  <label className="text-[14px]" htmlFor="">
                    Email address
                  </label>
                  <div className="emailInputField border p-2 flex items-center gap-2 rounded-lg border-[#1E293B]">
                    <div className="">
                      <i class="fa-solid fa-envelope text-[#94A3B8] text-[11px] "></i>
                    </div>
                    <input
                      className="w-[90%] outline-none placeholder:text-[12px]"
                      type="email"
                      name=""
                      id=""
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="passwordBox  flex flex-col gap-1.5">
                  <div className="passwordWrapper flex justify-between items-center ">
                    <label className="text-[14px]" htmlFor="">
                      Password
                    </label>
                    {!isSignUp && (
                      <p className="text-purple-500 text-[12px] cursor-pointer">
                        Forgot password?
                      </p>
                    )}
                  </div>
                  <div className="passwordInputField border p-2 flex items-center gap-2 rounded-lg border-[#1E293B] ">
                    <div className="">
                      <i class="fa-solid fa-lock text-[#94A3B8] text-[11px] "></i>
                    </div>
                    <input
                      className="w-[90%] outline-none placeholder:text-[12px]"
                      type="password"
                      name=""
                      id=""
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
                {!isSignUp && (
                  <div className="checkBox flex items-center gap-2 ">
                    <div
                      onClick={tickedToggler}
                      className="w-4 h-4 border rounded-xs flex items-center justify-center "
                    >
                      {isTicked && (
                        <div className="w-4 h-4 border border-purple-500 rounded-xs bg-purple-500 flex items-center justify-center">
                          <i class="fa-solid fa-check text-[11px]"></i>
                        </div>
                      )}
                    </div>
                    <p className="text-[14px]">Remember me</p>
                  </div>
                )}

                <button
                  className="border flex justify-center  cursor-pointer  p-3 rounded-lg bg-purple-600 hover:bg-purple-800 border-none"
                  type="submit"
                >
                  <div className="w-[95%]  text-[16px] font-bold">
                    <p>{isSignUp ? "Create account" : "Sign in"}</p>
                  </div>
                  <div className="w-[5%]">
                    <i className="fa-solid fa-arrow-right "></i>
                  </div>
                </button>
              </form>

              <div className="divider grid grid-cols-3 items-center py-2 my-2.5">
                <hr className="border border-[#1E293B]" />
                <p className="text-center text-[14px]">or Continue with</p>
                <hr className="border border-[#1E293B]" />
              </div>

              <div className="socialLinkBoxContainer flex  items-center justify-between py-6">
                <div className="socialBox border border-[#1E293B] hover:border-[#8B5CF6] cursor-pointer  flex gap-2 items-center py-2 px-2 rounded-lg  w-40 justify-center ">
                  <img className="w-4" src={googleImg} alt="google" />
                  <p className="text-[14px]">Google</p>
                </div>
                <div className="socialBox border border-[#1E293B] hover:border-[#8B5CF6]  cursor-pointer flex gap-2 items-center p py-2 px-2 rounded-lg w-40 justify-center ">
                  <img className="w-4" src={microsoftImg} alt="microsoft" />
                  <p className="text-[14px]">Microsoft</p>
                </div>
                <div className="socialBox border border-[#1E293B] hover:border-[#8B5CF6] cursor-pointer  flex gap-2 items-center p py-2 px-2 rounded-lg w-40 justify-center ">
                  <img className="w-4" src={appleImg} alt="apple" />
                  <p className="text-[14px]">Apple</p>
                </div>
              </div>
            </div>

            <div className="div bg-[#0D131D] border-t border-[#1E293B]  ">
              <div className=" py-6 px-4 text-center text-[14px] flex gap-1 items-center justify-center ">
                <p>

                 {isSignUp ? "Already have an account?":"Don't have an account?"}
                 
                </p>
                 <span onClick={signUp} className="text-purple-500 cursor-pointer ">
                   {isSignUp ? "Sign in" : "Sign up"}
                  </span>
              </div>
            </div>
          </div>
          <div className="bottomInfo">
            <p className="text-center text-[14px] text-[#94A3B8]">
              <i class="fa-solid fa-shield text-purple-600"></i> Your data is
              secure with us.
            </p>
            <p className="text-center text-[14px] text-[#94A3B8]">
              We never share your information with anyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
