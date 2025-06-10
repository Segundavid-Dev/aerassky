import Button from "../shared/Button";
const reasonsArray = [
  {
    img: "/images/expertise.png",
    heading: "Expertise That Drives Results",
    text: "Our team of seasoned professionals brings years of experience and expertise to the table.",
  },
  {
    img: "/images/web-design.png",
    heading: "Tailored Business Solutions ",
    text: "We understand that every business is unique. That's why our solutions are customized.",
  },
  {
    img: "/images/expertise.png",
    heading: "Cutting-Edge Web Design",
    text: "Leave a lasting impression on your audience with our top-notch web design services.",
  },
  {
    img: "/images/mobile.png",
    heading: "Mobile-First Approach",
    text: "In today's mobile-centric world, we prioritize mobile-first design to ensure your website.",
  },
  {
    img: "/images/marketing-strategies.png",
    heading: "Marketing Strategies",
    text: "Our data-driven marketing strategies allow us to target the right audience with precision",
  },
  {
    img: "/images/seo.png",
    heading: "Search Engine Optimization",
    text: "(SEO) Mastery Boost your online visibility with our expert SEO techniques.",
  },
];

export default function ReasonsToChoose() {
  return (
    <div className="text-center">
      <h2 className="text-[48px] font-semibold w-[60%] mx-auto">
        Reasons to Choose Aerassky for
        <span className="text-[var(--text-gray)]"> Your Digital Journey</span>
      </h2>
      <p className="text-[var(--text-gray)] w-[75%] mx-auto">
        Partnering with DigitX offers a multitude of advantages. Experience
        increased brand visibility, improved customer engagement, and higher
        ROI. Our tailored solutions are designed to meet your unique business
        needs, ensuring lasting success.
      </p>
      <div className="grid grid-cols-3 gap-20">
        {reasonsArray.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-center flex-col">
              <img src={item.img} alt="Image icon" />
              <h2>{item.heading}</h2>
              <p>{item.text}</p>
              <Button>Learn More</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
