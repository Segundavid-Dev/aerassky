import Marquee from "react-fast-marquee";

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
      <TestimonialSlider/>
    </div>
  );
}

function TestimonialSlider() {
  return (
    <div>
      <Marquee>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
}
