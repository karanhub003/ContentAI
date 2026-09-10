import React from "react";
import Button from "../common/Button";
import bundle from '../../assets/Auth Page/bundle.webp'

export default function LandingHero() {
  return (
    <div className="LandingHeroContainer grid grid-cols-[1fr_1fr] max-w-345 mx-auto">
      <div className="leftSideContainer border">
        <p>
          <i class="fa-solid fa-wand-magic-sparkles"></i>AI-Powered Content
          Creation
        </p>

        <div className="heroHeadingSubHeadingWrapper">
          <div className="heading">
            <h2>Create. Plan. Publish.</h2>
            <h2>Grow with Al</h2>
          </div>
          <div className="subHeading">
            <p>
              Your all-in-one Al content platform to ideate, create, schedule,
            </p>
            <p> and analyze content co that drives real results.</p>
          </div>
        </div>
        <div className="ctaBtnWrapper">
            <Button variant="secondary" size="lg">Get started free</Button>
            <Button variant="outline" size="lg">Watch demo</Button>
        </div>
        <div className="bottomInfo">
            <div className="div">
                <div></div>
                <p>No credit card required</p>
            </div>
            <div className="div">
                <div></div>
                <p>free forever plan</p>
            </div>
            <div className="div">
                <div></div>
                <p>loved by 10K+ creators</p>
            </div>
        </div>
      </div>
      <div className="rightSideContainer border">
       <img src={bundle} alt="heroImg" /> 
      </div>
    </div>
  );
}
