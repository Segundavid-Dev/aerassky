import { reasonsArray } from "../../../public/data";
import Button from "../shared/Button";
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
