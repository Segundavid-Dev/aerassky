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
      <p>services grid</p>
    </div>
  );
}
