import { reasonsArray } from "../../../public/data";
import Button from "../shared/Button";

import { MoveRight } from "lucide-react";

export default function ReasonsToChoose() {
  return (
    <div className="text-center pb-30">
      <h2 className="text-[48px] font-semibold w-[60%] mx-auto max-sm:text-[32px] max-sm:w-full max-sm:pb-5">
        Reasons to Choose Aerassky for
        <span className="text-[var(--text-gray)]"> Your Digital Journey</span>
      </h2>
      <p className="text-[var(--text-gray)] w-[75%] mx-auto pb-20 max-sm:w-full">
        Partnering with DigitX offers a multitude of advantages. Experience
        increased brand visibility, improved customer engagement, and higher
        ROI. Our tailored solutions are designed to meet your unique business
        needs, ensuring lasting success.
      </p>
      <div className="grid grid-cols-3 gap-20 max-sm:grid-cols-1">
        {reasonsArray.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-center flex-col">
              <div className="mb-5">
                <img src={item.img} alt="Image icon" />
              </div>
              <h2 className="text-2xl font-semibold pb-2">{item.heading}</h2>
              <p className="text-[var(--text-gray)] pb-4">{item.text}</p>
              <Button className="flex items-center text-[14px] border border-[#e6e6e6] gap-[15px] px-[15px] py-[7px] rounded-full cursor-pointer duration-300 hover:bg-white hover:text-black hover:translate-x-4">
                Learn More
                <span className="bg-[#1A1A1A] px-[20px] py-[10px] rounded-full">
                  <MoveRight size={14} color="#fff" />
                </span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
