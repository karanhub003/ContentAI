import React from "react";
import Button from "../common/Button";
import SelectOption from "../common/SelectOption";

export default function ContentAction() {
  return (
    <div className="ContentActionContainer ">
      <div className="actionBtnWrapper grid grid-cols-4 gap-4">
        <Button variant="outline">
          <i class="fa-regular fa-copy"></i> Copy
        </Button>
        <Button variant="outline">
          <i class="fa-solid fa-arrow-down"></i> Download
        </Button>
        <Button variant="outline">
          <i class="fa-solid fa-rotate-right"></i> Regenerate
        </Button>
        
        {/* Drop Down Menu */}
        <div className="relative">
          <Button variant="outline">
            Publish <i class="fa-solid fa-angle-down"></i>
          </Button>
          <div className="absolute border right-0 top-full mt-2 w-38 rounded-lg  border-[#1E293B] bg-[#0D131D] p-1 hidden">
            <div className="rounded-md px-3 py-2 text-sm text-white hover:bg-[#172033]">
              Publish Now
            </div>

            <div className="rounded-md px-3 py-2 text-sm text-white hover:bg-[#172033]">
              Schedule Post
            </div>

            <div className="rounded-md px-3 py-2 text-sm text-white hover:bg-[#172033]">
              Save as Draft
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
