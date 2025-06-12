import Marquee from "react-fast-marquee";
import { TestimonialsArray } from "../../../public/data";

export default function Testimonials() {
  return (
    <div>
      <div className="text-center pb-30">
        <h2 className="text-[48px] font-semibold w-[60%] mx-auto">
          <span className="text-[var(--text-gray)]">Our</span> Testimonials
        </h2>
        <p className="text-[var(--text-gray)] w-[70%] mx-auto">
          Don't just take our word for it; hear what our satisfied clients have
          to say about their experience with DigitX. We take pride in building
          lasting relationships and delivering exceptional results.
        </p>
      </div>
      <TestimonialSlider />
    </div>
  );
}

function TestimonialSlider() {
  return (
    <Marquee>
      <div className="flex">
        {TestimonialsArray.map((item, index) => (
          <div key={index} className="max-w-[400px] mr-10 ">
            <div className="border border-gray-100/20 p-5 rounded-[20px] mb-3 bg-[#1a1a1a]">
              <div className="mb-3">
                <img
                  src={item.icon}
                  alt="twitter icon"
                  className="p-2 border border-gray-100/20 rounded-[10px] w-[40px]"
                />
              </div>
              <p className="text-[15px]">{item.comment}</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={item.userImage} alt="user image" className="w-[40px]" />
              <span>
                <p>{item.userName}</p>
                <p className="text-[14px] text-[var(--text-gray)]">
                  {item.userTitle}
                </p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </Marquee>
  );
}
