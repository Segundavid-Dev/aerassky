import Button from "../shared/Button";
export default function Hero() {
  return (
    <>
      <div className="text-center py-30 max-sm:pt-10 max-sm:pb-30">
        <h1 className="text-[58px] font-semibold max-sm:text-[34px]">
          Digital Solutions
          <span className="text-[var(--text-gray)]"> That Drive Success</span>
        </h1>
        <p className="text-[var(--text-gray)] w-[65%] mx-auto max-sm:w-full">
          At DigitX, we believe in the transformative power of digital
          solutions. Our team of experts is dedicated to helping businesses like
          yours thrive in the fast-paced digital landscape. From captivating web
          design to data-driven marketing strategies, we are committed to
          delivering results that exceed expectations.
        </p>
        <HeroCallToAction />
      </div>
    </>
  );
}

function HeroCallToAction() {
  return (
    <div className="pt-5">
      <p className="text-[20px] mb-4">Unlock your Digital Potential Today</p>
      <div className="flex gap-4 items-center justify-center">
        <Button className="px-[28px] py-[14px] rounded-full bg-white text-black cursor-pointer hover:bg-[#1a1a1a] hover:text-white duration-300 whitespace-nowrap">
          Get Started
        </Button>
        <Button className="px-[28px] py-[14px] rounded-full bg-[#1a1a1a] cursor-pointer duration-300 hover:bg-white hover:text-black whitespace-nowrap">
          Free Consultation
        </Button>
      </div>
    </div>
  );
}
