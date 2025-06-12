import { worksArray } from "../../../public/data";
import Button from "../shared/Button";

import { MoveRight } from "lucide-react";
export default function Works() {
  return (
    <div className="pb-30">
      <div className="text-center">
        <h2 className="text-[48px] font-semibold pb-5">
          <span className="text-[var(--text-gray)]">Our</span> Works
        </h2>
        <p className="text-[var(--text-gray)] w-[70%] mx-auto">
          Witness the brilliance of our previous projects. Our portfolio
          showcases the successful collaborations we've had with diverse clients
          across various industries. Let our work speak for itself.
        </p>
      </div>
      <WorksGrid />
      <Button className="text-[14px] flex items-center gap-[15px] border border-[#e6e6e6] px-[15px] py-[7px] rounded-full cursor-pointer hover:bg-white hover:text-black hover:translate-x-4 duration-300 mt-20 mx-auto">
        View all projects
        <span>
          <MoveRight size={14} />
        </span>
      </Button>
    </div>
  );
}

function WorksGrid() {
  return (
    <div className="grid grid-cols-2 gap-30">
      {worksArray.map((item, index) => (
        <div key={index}>
          <div className="bg-[url(/images/home/abstract-background.png)] bg-no-repeat bg-cover py-20">
            <img
              src={item.img}
              alt="Image icon"
              className="w-[120px] mx-auto"
            />
          </div>
          <p className="text-[24px] font-semibold">{item.heading}</p>
          <div className="flex items-center justify-between pb-2">
            <p>{item.subheading}</p>
            <p>{item.date}</p>
          </div>
          <p className="text-[var(--text-gray)]">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
