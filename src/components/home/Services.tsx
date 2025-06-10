import { servicesArray } from "../../../public/data";

export default function Services() {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-[48px] font-semibold">
          <span className="text-[var(--text-gray)]">Our</span> Services
        </h2>
        <p className="text-[var(--text-gray)] pb-10 w-[70%] mx-auto">
          Our comprehensive range of services includes web design, mobile app
          development, SEO, social media marketing, and more. Whether you're a
          startup or an established enterprise, our experts will craft solutions
          that drive results.
        </p>
      </div>
      <ServicesGrid />
    </div>
  );
}

function ServicesGrid() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-20 text-center">
        {servicesArray.map((item, index) => (
          <div
            key={index}
            className="bg-[url(/images/home/abstract-background.png)] bg-no-repeat bg-center"
          >
            <img src={item.img} alt="Image icon" className="w-[90px] mx-auto" />
            <h3 className="text-[30px]">{item.heading}</h3>
            <p className="w-[95%] mx-auto text-[var(--text-gray)]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
