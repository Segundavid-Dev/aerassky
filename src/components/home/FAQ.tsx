import { useState } from "react";

import { FAQArray } from "../../../public/data";

import { Plus } from "lucide-react";

export default function FAQ() {
  return (
    <div className="pb-30">
      <div>
        <h2 className="text-[48px] font-semibold w-[60%] mx-auto">
          <span className="text-[var(--text-gray)]">Frequently</span> Asked
          Questions
        </h2>
        <p className="text-[var(--text-gray)] w-[70%] mx-auto pb-10 text-center">
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
  return (
    <div className="grid grid-cols-2 gap-10">
      {FAQArray.map((item, index) => (
        <div
          key={index}
          className={`${
            index !== 7 ? "border-b border-gray-100/20" : ""
          } cursor-pointer`}
        >
          <div className="flex justify-between">
            <h2 className="text-[18px] pb-5 w-[80%]">{item.title}</h2>
            <span className="bg-[#1a1a1a] rounded-full h-[52px] w-[52px] flex items-center justify-center">
              <Plus strokeWidth={3} />
            </span>
          </div>
          <p className="text-[var(--text-gray)] max-h-0 overflow-hidden">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}
