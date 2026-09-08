import React from "react";
import logoImg from "../../../assets/New folder/logoImage.png";
import heroImg from "../../../assets/Auth Page/heroImg.webp";
import googleImg from "../../../assets/Auth Page/google.png";
import microsoftImg from "../../../assets/Auth Page/microsoft.png";
import appleImg from "../../../assets/Auth Page/apple.png";
import bundle from "../../../assets/Auth Page/bundle.webp";

import { features } from "../../../data/features";

export default function Login() {
  return (
    <div className="LoginMainContainer border min-h-screen flex justify-center items-center    ">
      <div
        className="contentMainContainer max-w-[1600px] mx-auto p-3  bg-contain bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="insideWrapperContainer  grid grid-cols-[1fr_1fr] gap-3.5 ">
          <div className="leftSideContainer    flex flex-col justify-between p-8">
            <div className="topSideContainer">
              {" "}
              <div className="logoBox  flex items-center font-bold gap-2">
                <img className="w-10" src={logoImg} alt="logoImg" />
                <h2 className="text-[18px]">
                  ContentPilot <span className="text-[#7C3AED]">Ai</span>
                </h2>
              </div>
              <div className="subHeadingContainer">
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
            <div>
              <img className="" src={bundle} alt="bundle" />
            </div>
            <div className="bottomContainer py-2.5 flex flex-col gap-3">
              <div className="featuresBoxWrapper flex  p-1.5 gap-1">
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
              <div className="quoteWrapper flex gap-2.5">
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
          <div className="rightSideContainer  border flex flex-col   gap-3 bg-[#0D131D] border-[#1E293B] rounded-lg p-2">
            <div className="toggleWrapper flex justify-end ">
              <div className="toggleMode border flex items-center py-2 px-3.5 gap-1.5 align-right cursor-pointer">
                <i className="fa-regular fa-moon text-[12px]"></i>
                <p className="text-[12px] font-medium">Dark</p>
                <i className="fa-solid fa-angle-down text-[12px]"></i>
              </div>
            </div>
            <div className="innerFormContainer flex flex-col  border w-140 mx-auto px-5 py-10 border-[#1E293B] bg-[#111927] rounded-lg gap-3.5">
              <div className="headingInfo py-3.5">
                <h2 className="text-2xl font-semibold">Welcome back 👋</h2>
                <p className="text-[18px] font-medium text-[#94A3B8]">
                  Sign in to continue to{" "}
                  <span className="text-purple-500">ContentPilot Al</span>
                </p>
              </div>
              <form className=" flex flex-col gap-6 py-3.5">
                <div className="emailBox  flex flex-col gap-1">
                  <label htmlFor="">Email address</label>
                  <div className="emailInputField border p-2 flex items-center gap-1  rounded-lg border-[#1E293B]">
                    <i class="fa-solid fa-envelope text-[#94A3B8]"></i>
                    <input
                      className="w-[90%]"
                      type="email"
                      name=""
                      id=""
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="passwordBox  flex flex-col gap-1">
                  <div className="passwordWrapper flex justify-between items-center ">
                    <label htmlFor="">Password</label>
                    <p className="text-purple-500">Forgot password?</p>
                  </div>
                  <div className="passwordInputField border p-2 flex items-center gap-1 rounded-lg border-[#1E293B] ">
                    <i class="fa-solid fa-lock text-[#94A3B8]"></i>
                    <input
                      className="w-[90%]"
                      type="password"
                      name=""
                      id=""
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
                <div className="checkBox flex items-center gap-2 ">
                  <div className="w-4 h-4 border rounded-xs"></div>
                  <p>Remember me</p>
                </div>

                <button
                  className="border flex  p-2 rounded-lg bg-purple-600"
                  type="submit"
                >
                  <p>sign in</p>
                  <span>
                    <i className="fa-solid fa-arrow-right align-right"></i>
                  </span>
                </button>
              </form>

              <div className="divider grid grid-cols-3 items-center py-3.5">
                <hr />
                <p className="text-center">or Continue with</p>
                <hr />
              </div>

              <div className="socialLinkBoxContainer flex  items-center justify-between py-6">
                <div className="socialBox border flex gap-2 items-center py-2 px-2 rounded-lg  w-40 justify-center ">
                  <img className="w-5" src={googleImg} alt="google" />
                  <p>Google</p>
                </div>
                <div className="socialBox border flex gap-2 items-center p py-2 px-2 rounded-lg w-40 justify-center ">
                  <img className="w-5" src={microsoftImg} alt="microsoft" />
                  <p>Microsoft</p>
                </div>
                <div className="socialBox border flex gap-2 items-center p py-2 px-2 rounded-lg w-40 justify-center ">
                  <img className="w-5" src={appleImg} alt="apple" />
                  <p>Apple</p>
                </div>
              </div>
              <hr />
              <div className="div p-5 text-center text-[14px]">
                <p>
                  Don't have an account? <span className="text-purple-500">Sign up</span>
                </p>
              </div> 
            </div>
            <div className="bottomInfo">
              <p>
                <i class="fa-solid fa-shield"></i> Your data is secure with us.
              </p>
              <p>We never share your information with anyone.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
