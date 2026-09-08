import React from "react";
import logoImg from "../../../assets/New folder/logoImage.png";
import heroImg from "../../../assets/Auth Page/heroImg.webp";
import googleImg from '../../../assets/Auth Page/google.png'
import microsoftImg from '../../../assets/Auth Page/microsoft.png'
import appleImg from '../../../assets/Auth Page/apple.png'


import { features } from "../../../data/features";

export default function Login() {
  return (
    <div className="LoginMainContainer border min-h-screen flex justify-center items-center    ">
      <div
        className="contentMainContainer max-w-[1600px] mx-auto p-3  bg-cover bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="insideWrapperContainer grid grid-cols-2 gap-3.5">
          <div className="leftSideContainer border  flex flex-col justify-between p-1.5">
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
            <div className="bottomContainer">
              <div className="featuresBoxWrapper flex border p-1.5 gap-1">
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
                      <div className="hidden"></div>
                    ) : (
                      <div className="w-0.5 h-full bg-[#1E293B]"></div>
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
          <div className="rightSideContainer border ">
            <div className="toggleMode">
              <i class="fa-regular fa-moon"></i>
              <p>Dark</p>
              <i class="fa-solid fa-angle-down"></i>
            </div>
                <div className="innerFormContainer border">
                <div className="headingInfo">
                  <h2>Welcome back</h2>
                  <p>Sign in to continue to <span>ContentPilot Al</span></p>
                </div>
              <form>
                <div className="emailBox">
                  <label htmlFor="">Email address</label>
                  <div className="emailInputField">
                    <input type="email" name="" id="" placeholder="Enter your email"/>
                  </div>
                </div>
                <div className="passwordBox">
                  <div className="passwordWrapper">
                    <label htmlFor="">Password</label>
                    <p>Forgot password?</p>
                  </div>
                  <div className="passwordInputField">
                    <input type="password" name="" id="" placeholder="Enter your password"/>
                  </div>
                </div>
                <div className="checkBox">
                  <div></div>
                  <p>Remember me</p>
                </div>

                <button type="submit"><p>sign in</p><p><i class="fa-solid fa-arrow-right"></i></p></button>
              </form>

              <div className="divider">
                <hr />
                <p>or Continue with</p>
                <hr />
              </div>

                <div className="socialLinkBoxContainer">
                  <div className="socialBox"><img src={googleImg} alt="google" /><p>Google</p></div>
                  <div className="socialBox"><img src={microsoftImg} alt="microsoft" /><p>Microsoft</p></div>
                  <div className="socialBox"><img src={appleImg} alt="apple" /><p>Apple</p></div>
                </div>
                 <hr />
                <div className="div">
                  <p>Don't have an account? <span>Sign up</span></p>
                </div>
                </div>
              <div className="bottomInfo">
                <p><i class="fa-solid fa-shield"></i> Your data is secure with us.</p>
                <p>We never share your information with anyone.</p>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
}
