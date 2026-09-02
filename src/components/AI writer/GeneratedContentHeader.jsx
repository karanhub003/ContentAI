import React from "react";
import Button from "../common/Button";

export default function GeneratedContentHeader() {
  return (
    <div className="GeneratedContentHeaderContainer flex justify-between">
      <div className="typeSelectionHeading flex gap-2.5 items-center">
        <div className="countWrapper w-5 h-5 rounded-full flex items-center justify-center bg-purple-400 ">
          3
        </div>
        <h2 className="text-[20px]">Generated Content</h2>
      </div>
      <div className="rightSideContainer flex items-center gap-4">
        <div className="wordsCountBox flex items-center gap-2.5">
          <p className="text-[12px] text-[#94A3B8]">Words:0</p>
          <div className="w-0.5 h-5 bg-[#1E293B]"></div>
          <p className="text-[12px] text-[#94A3B8]">Characters:0</p>{" "}
        </div>
        <Button variant="outline" size="md"><i class="fa-regular fa-bookmark"></i>Save</Button>
      </div>
    </div>
  );
}
