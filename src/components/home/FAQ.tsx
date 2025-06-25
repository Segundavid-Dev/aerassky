import { FAQArray } from "../../../public/data";
import { useState } from "react";

import { Plus } from "lucide-react";

export default function FAQ() {
  return (
    <div className="pb-30">
      <div>
        <h2 className="text-[48px] font-semibold w-[60%] mx-auto max-sm:text-[32px] max-sm:w-full text-center">
          <span className="text-[var(--text-gray)]">Frequently</span> Asked
          Questions
        </h2>
        <p className="text-[var(--text-gray)] w-[70%] mx-auto pb-10 text-center max-sm:w-full ">
          Got questions? We've got answers. Check out our frequently asked
          questions section to find valuable insights into our processes,
          pricing, and more. Transparency is at the core of our client
          interactions.
        </p>
      </div>
      <FAQGrid />
    </div>
  );
}

function FAQGrid() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  const openFaq = (id: number) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-[70%] mx-auto max-sm:w-full">
      {FAQArray.map((item, index) => (
        <div
          key={index}
          onClick={() => openFaq(index)}
          className={`${
            index !== 7 ? "border-b border-gray-100/20" : ""
          } cursor-pointer pb-3 py-5`}
        >
          <div className="flex justify-between">
            <h2 className="text-[18px] pb-5 w-[80%]">{item.title}</h2>
            <span className="bg-[#1a1a1a] rounded-full h-[52px] w-[52px] flex items-center justify-center hover:bg-white hover:text-[#1a1a1a] duration-300">
              <Plus strokeWidth={3} />
            </span>
          </div>
          <p
            className={`text-[var(--text-gray)] overflow-hidden ${
              openFaqId === index
                ? "max-h-40 overflow-hidden"
                : "max-h-0 opacity-0"
            } transition-all duration-500 ease-out`}
          >
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}
