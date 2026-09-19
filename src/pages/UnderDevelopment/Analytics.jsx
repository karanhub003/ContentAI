import React from "react";
import Button from "../../components/common/Button";
import mockImg from "../../assets/UnderDevelopment/TeamWork/mockimg.webp";
import heroImg from "../../assets/UnderDevelopment/TeamWork/bgimage.webp";
import { useNavigate } from "react-router-dom";

export default function Analytics() {
  const navigate = useNavigate();
  const redirectHandler = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div
      className="teamWorkContainer flex justify-center items-center   bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="insideWrapper flex flex-col items-center ">
        <div className="bgImgContainer w-100   mr-4">
          <img className="w-full  pt-7" src={mockImg} alt="" />
        </div>
        <div className="bottomInfoContainer  flex flex-col items-center gap-8">
          <div className="topWrapper flex flex-col items-center gap-3">
            <div className="comingSoonWrapper  flex items-center gap-0.5 py-1.5 px-3 rounded-full bg-purple-500/20">
              <i class="fa-solid fa-wand-magic-sparkles text-[14px] text-purple-300"></i>
              <p className="text-[18px] font-light text-purple-300">
                Coming Soon
              </p>
            </div>
            <div className="headingWrapper  flex flex-col items-center w-100 gap-1.5">
              <h2 className="text-[38px] font-semibold">
                Analytics
              </h2>
              <p className="text-[12px] text-center text-[#94A3B8]">
                Collaborate with your team, manage roles and permissions,
                Integrations and create content together in one powerful
                workspace.
              </p>
            </div>
          </div>
          <div className="featureCardContainer border border-[#1E293B] bg-[#0D131D] flex flex-col gap-1.5 max-w-250 px-3 py-6 rounded-xl">
            <p className="text-[14px] font-semibold">
              What you'll be able to do
            </p>
            <div className="featureCardsWrapper flex items-center gap-3">
              <div className="featureCard  flex flex-col p-3">
                <div className="logoImg  w-12 h-12 flex items-center justify-center rounded-xl bg-purple-700/30">
                  <i class="fa-solid fa-user-group text-[18px] text-purple-400"></i>
                </div>
                <h3 className="text-[14px] font-medium mt-2">
                  Invite team members
                </h3>
                <p className="text-[12px] text-[#94A3B8] w-40">
                  Add team members and work together seamlessly.
                </p>
              </div>
              <div className="featureCard  flex flex-col p-3">
                <div className="logoImg  w-12 h-12 flex items-center justify-center rounded-xl bg-blue-700/30">
                  <i class="fa-solid fa-shield text-[18px] text-blue-400"></i>
                </div>
                <h3 className="text-[14px] font-medium mt-2">
                  Manage roles & permissions
                </h3>
                <p className="text-[12px] text-[#94A3B8] w-40">
                  Control access and keep your content secure.
                </p>
              </div>
              <div className="featureCard  flex flex-col p-3">
                <div className="logoImg  w-12 h-12 flex items-center justify-center rounded-xl bg-pink-700/30">
                  <i class="fa-solid fa-message text-[18px] text-pink-400"></i>
                </div>
                <h3 className="text-[14px] font-medium mt-2">
                  Collaborate on content
                </h3>
                <p className="text-[12px] text-[#94A3B8] w-40">
                  Plan, create and review content as a team.
                </p>
              </div>
              <div className="featureCard  flex flex-col p-3">
                <div className="logoImg  w-12 h-12 flex items-center justify-center rounded-xl bg-green-700/30">
                  <i class="fa-solid fa-folder text-[18px] text-green-400"></i>
                </div>
                <h3 className="text-[14px] font-medium mt-2">
                  Share templates
                </h3>
                <p className="text-[12px] text-[#94A3B8] w-40">
                  Use shared templates and brand settings.
                </p>
              </div>
            </div>
          </div>
          <Button onClick={redirectHandler} variant="secondary" size="lg">
            Back To Dashboard
          </Button>
          <div className="smallInfoFooter  flex flex-col items-center gap-2  py-5">
            <div className="topWrapper flex items-center ">
              <hr className="w-40 border-[#1E293B]" />
              <p className="text-[14px] font-medium text-[#94A3B8]">
                We're working on something great!
              </p>
              <hr className="w-40 border-[#1E293B]" />
            </div>
            <div className="bottom flex flex-col items-center gap-1">
              <p className="text-[14px] text-center w-145 text-[#94A3B8]">
                This feature is currently under development and will be
                available in a future update. Stay tuned!
              </p>
              <p className="text-[12px] font-semibold text-[#94A3B8]">
                The ContentPilot Al Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
