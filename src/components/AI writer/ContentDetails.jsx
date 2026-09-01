import React from "react";
import SelectOption from "../common/SelectOption";
import Button from '../common/Button'
export default function ContentDetails() {
  return (
    <div className="contentDetailsContainer flex flex-col gap-5">
      <div className="typeSelectionHeading flex gap-2.5 items-center">
        <div className="countWrapper w-5 h-5 rounded-full flex items-center justify-center bg-purple-400 ">
          2
        </div>
        <h2 className="text-[20px]">Content Details</h2>
      </div>
      <div className="topicContainer flex flex-col gap-2">
        <label className="text-[14px]">Topic/ Prompt</label>
      <textarea
        className="w-full h-20 border border-[#1E293B] rounded-lg p-1.5 text-[14px] "
        placeholder="e.g. Benefits of AI for content creators"
      ></textarea>
      </div>

      <div className="toneVoiceContainer grid grid-cols-2 gap-8 ">
        <SelectOption
          label="Tone"
          options={["Professional", "Casual", "Friendly", "Persuasive"]}
        />
        <SelectOption
          label="Language"
          options={["English", "Hindi", "Tamil", "French"]}
        />
      </div>
      <div className="contentLengthContainer flex flex-col gap-2">
        <label className="text-[16px]">Content Length</label>
        <div className="lengthCardWrapper grid grid-cols-3 gap-3">
            <div className="lengthCard border flex flex-col items-center border-[#1E293B] rounded-lg py-1.5 hover:border-[#8B5CF6] cursor-pointer active:border-[#8B5CF6]"><p className="text-[14px] ">Short</p>
            <p className="text-[14px] ">~300 words</p>
            </div>
            <div className="lengthCard border flex flex-col items-center border-[#1E293B] rounded-lg py-1.5 hover:border-[#8B5CF6] cursor-pointer active:border-[#8B5CF6]"><p className="text-[14px] ">Medium</p>
            <p className="text-[14px] ">~600 words</p></div>
            <div className="lengthCard border flex flex-col items-center border-[#1E293B] rounded-lg py-1.5 hover:border-[#8B5CF6] cursor-pointer active:border-[#8B5CF6]"><p className="text-[14px] ">Long</p><p className="text-[14px] ">~1200 words</p></div>
        </div>
      </div>
      <Button variant="secondary" size="lg">Generate Content</Button>
    </div>
  );
}
